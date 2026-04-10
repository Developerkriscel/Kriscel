"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Save, Globe, Share2, Info, CheckCircle2, AlertCircle, Sheet, RefreshCw, Plus, Trash2, Wifi, WifiOff, Loader2 } from 'lucide-react';
import { API_URL } from '@/lib/api';

interface Setting {
  _id: string;
  key: string;
  value: string;
  category: string;
  description: string;
}

interface SheetConfig {
  id: string;
  label: string;
  url: string;
  live: boolean;
  lastSyncedAt: string | null;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<Setting[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // ── Multi-sheet state ──
  const [sheets, setSheets] = useState<SheetConfig[]>([]);
  const [sheetsSaving, setSheetsSaving] = useState(false);
  const [sheetsMsg, setSheetsMsg] = useState({ type: '', text: '' });
  const [syncingId, setSyncingId] = useState<string | null>(null);

  const token = () => localStorage.getItem('kriscel_admin_token');

  useEffect(() => {
    fetchSettings();
    fetchSheets();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch(`${API_URL}/settings`, { headers: { 'Authorization': `Bearer ${token()}` } });
      const result = await res.json();
      if (result.success) setSettings(result.data);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  const fetchSheets = async () => {
    try {
      const res = await fetch(`${API_URL}/spreadsheet-configs`, { headers: { 'Authorization': `Bearer ${token()}` } });
      const result = await res.json();
      if (result.success) setSheets(result.data || []);
    } catch (err) { console.error(err); }
  };

  const handleInputChange = (key: string, value: string) => {
    setSettings(prev => prev.map(s => s.key === key ? { ...s, value } : s));
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage({ type: '', text: '' });
    try {
      const res = await fetch(`${API_URL}/settings/bulk`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token()}` },
        body: JSON.stringify({ settings: settings.map(s => ({ key: s.key, value: s.value })) })
      });
      const result = await res.json();
      if (result.success) {
        setMessage({ type: 'success', text: 'All settings updated successfully!' });
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to update settings' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Server error occurred' });
    } finally { setSaving(false); }
  };

  // ── Sheet helpers ──
  const addSheet = () => {
    setSheets(prev => [...prev, {
      id: `sheet_${Date.now()}`,
      label: `Sheet ${prev.length + 1}`,
      url: '',
      live: false,
      lastSyncedAt: null
    }]);
  };

  const removeSheet = (id: string) => setSheets(prev => prev.filter(s => s.id !== id));

  const updateSheet = (id: string, changes: Partial<SheetConfig>) => {
    setSheets(prev => prev.map(s => s.id === id ? { ...s, ...changes } : s));
  };

  const saveSheets = async () => {
    setSheetsSaving(true);
    setSheetsMsg({ type: '', text: '' });
    try {
      const res = await fetch(`${API_URL}/spreadsheet-configs`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token()}` },
        body: JSON.stringify({ configs: sheets })
      });
      const result = await res.json();
      if (result.success) {
        setSheetsMsg({ type: 'success', text: '✅ Sheet configurations saved!' });
        setTimeout(() => setSheetsMsg({ type: '', text: '' }), 3000);
      } else {
        setSheetsMsg({ type: 'error', text: result.error || 'Failed to save' });
      }
    } catch { setSheetsMsg({ type: 'error', text: 'Server error' }); }
    finally { setSheetsSaving(false); }
  };

  const syncSheet = async (sheetId: string) => {
    setSyncingId(sheetId);
    setSheetsMsg({ type: '', text: '' });
    try {
      const res = await fetch(`${API_URL}/contact/sync-sheet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token()}` },
        body: JSON.stringify({ sheetId })
      });
      const result = await res.json();
      if (result.success) {
        setSheetsMsg({ type: 'success', text: result.message });
        if (result.configs) setSheets(result.configs); // refresh lastSyncedAt
        setTimeout(() => setSheetsMsg({ type: '', text: '' }), 5000);
      } else {
        setSheetsMsg({ type: 'error', text: result.error || 'Sync failed' });
      }
    } catch { setSheetsMsg({ type: 'error', text: 'Server error during sync' }); }
    finally { setSyncingId(null); }
  };

  if (loading) return <div className="animate-pulse text-slate-500">Loading configurations...</div>;

  const marketplaceSettings = settings.filter(s => s.category === 'marketplace');
  const socialSettings = settings.filter(s => s.category === 'social');

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-white uppercase">Global Settings</h1>
          <p className="text-slate-400 text-sm mt-1">Manage brand destination URLs for floating logos and footer links.</p>
        </div>
        <button onClick={handleSave} disabled={saving}
          className="flex items-center gap-2 bg-accent hover:bg-accent text-white px-6 py-2.5 rounded-xl font-bold transition-all disabled:opacity-50 shadow-lg shadow-brand-navy/20">
          {saving ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save size={18} />}
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </div>

      {message.text && (
        <div className={`p-4 rounded-xl flex items-center gap-3 border ${message.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' : 'bg-rose-500/10 border-rose-500/50 text-rose-400'}`}>
          {message.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
          <p className="text-sm font-bold">{message.text}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Marketplaces */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent"><Globe size={20} /></div>
            <h2 className="text-lg font-bold text-white">Marketplace Links</h2>
          </div>
          <div className="space-y-6">
            {marketplaceSettings.map(setting => (
              <div key={setting.key} className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">{setting.description || setting.key.replace('_url', '').replace('_', ' ')}</label>
                <input type="text" value={setting.value} onChange={(e) => handleInputChange(setting.key, e.target.value)}
                  placeholder="https://..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-pink-500/10 rounded-xl flex items-center justify-center text-pink-400"><Share2 size={20} /></div>
            <h2 className="text-lg font-bold text-white">Social Media Profiles</h2>
          </div>
          <div className="space-y-6">
            {socialSettings.map(setting => (
              <div key={setting.key} className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-500">{setting.description || setting.key.replace('_url', '').replace('_', ' ')}</label>
                <input type="text" value={setting.value} onChange={(e) => handleInputChange(setting.key, e.target.value)}
                  placeholder="https://..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Spreadsheet Integration ── */}
      <div className="bg-slate-900/50 backdrop-blur-xl border border-emerald-900/40 rounded-3xl p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400"><Sheet size={20} /></div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white">Spreadsheet Integration</h2>
            <p className="text-xs text-slate-500 mt-0.5">Add multiple Google Sheets — toggle Live to auto-sync new submissions instantly.</p>
          </div>
          <button onClick={addSheet}
            className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl font-bold text-sm transition-all whitespace-nowrap">
            <Plus size={15} /> Add Sheet
          </button>
        </div>

        {/* Setup Guide */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 my-5 text-xs text-slate-400 space-y-2 leading-relaxed">
          <p className="text-slate-300 font-bold mb-3 text-sm">📋 One-time setup (3 minutes):</p>
          <ol className="list-decimal list-inside space-y-1.5">
            <li>Open Google Sheet → <strong className="text-white">Extensions → Apps Script</strong></li>
            <li>Delete existing code and paste the script below → <strong className="text-white">Deploy → New Deployment → Web App</strong></li>
            <li>Set <strong className="text-white">"Who has access"</strong> to <span className="text-amber-400 font-bold">Anyone</span></li>
            <li>Copy the <strong className="text-white">Web App URL</strong>, paste in a sheet row below, click <strong className="text-white">Save Sheets</strong></li>
            <li>Toggle <strong className="text-emerald-400">Live ON</strong> for auto-sync on every new submission. Use <strong className="text-white">Sync New</strong> for manual dedup sync.</li>
          </ol>
          <div className="mt-3 bg-slate-900 rounded-xl p-4 font-mono text-[10px] text-emerald-300 overflow-x-auto whitespace-pre">{`function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Name','Email','Phone','Subject','Message','Date']);
  }
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.Name, data.Email, data.Phone, data.Subject, data.Message, data.Date]);
  return ContentService.createTextOutput('OK');
}`}</div>
        </div>

        {/* Sheet Rows */}
        <div className="space-y-4">
          {sheets.length === 0 && (
            <div className="text-center py-8 text-slate-600 border border-dashed border-slate-800 rounded-2xl">
              <Sheet size={32} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm">No sheets added yet. Click <strong className="text-emerald-500">+ Add Sheet</strong> to connect your first Google Sheet.</p>
            </div>
          )}

          {sheets.map((sheet, idx) => (
            <div key={sheet.id} className={`border rounded-2xl p-4 transition-all ${sheet.live ? 'border-emerald-700/50 bg-emerald-950/20' : 'border-slate-800 bg-slate-950/40'}`}>
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Label */}
                <input
                  type="text"
                  value={sheet.label}
                  onChange={e => updateSheet(sheet.id, { label: e.target.value })}
                  placeholder="Sheet Label (e.g. Main CRM)"
                  className="w-full sm:w-36 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs font-bold text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                />
                {/* URL */}
                <input
                  type="url"
                  value={sheet.url}
                  onChange={e => updateSheet(sheet.id, { url: e.target.value })}
                  placeholder="https://script.google.com/macros/s/.../exec"
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                />

                <div className="flex items-center gap-2 shrink-0">
                  {/* Live Toggle */}
                  <button
                    onClick={() => updateSheet(sheet.id, { live: !sheet.live })}
                    className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest border transition-all ${
                      sheet.live
                        ? 'bg-emerald-600/20 border-emerald-600/50 text-emerald-400 hover:bg-emerald-600/30'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                    }`}
                    title={sheet.live ? 'Live — new submissions auto-sync' : 'Offline — click to enable live sync'}
                  >
                    {sheet.live ? <Wifi size={13} /> : <WifiOff size={13} />}
                    {sheet.live ? 'Live' : 'Off'}
                  </button>

                  {/* Sync New Only */}
                  <button
                    onClick={() => syncSheet(sheet.id)}
                    disabled={!sheet.url || syncingId === sheet.id}
                    className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-bold text-[10px] transition-all disabled:opacity-40"
                    title="Sync only new entries (no duplicates)"
                  >
                    {syncingId === sheet.id
                      ? <Loader2 size={13} className="animate-spin" />
                      : <RefreshCw size={13} />}
                    Sync New
                  </button>

                  {/* Delete */}
                  <button onClick={() => removeSheet(sheet.id)}
                    className="w-9 h-9 flex items-center justify-center bg-rose-900/20 hover:bg-rose-800/40 text-rose-400 rounded-xl border border-rose-900/30 transition-all">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>

              {/* Last synced timestamp */}
              {sheet.lastSyncedAt && (
                <p className="text-[10px] text-slate-600 mt-2 pl-1">
                  Last synced: <span className="text-slate-500">{new Date(sheet.lastSyncedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
                </p>
              )}
              {!sheet.lastSyncedAt && sheet.url && (
                <p className="text-[10px] text-amber-600/70 mt-2 pl-1">Not synced yet — click "Sync New" to upload all existing contacts.</p>
              )}
            </div>
          ))}
        </div>

        {/* Save Sheets Button */}
        {sheets.length > 0 && (
          <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
            <button onClick={saveSheets} disabled={sheetsSaving}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-50">
              {sheetsSaving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
              Save Sheets
            </button>
            {sheetsMsg.text && (
              <div className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl border ${sheetsMsg.type === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'}`}>
                {sheetsMsg.type === 'success' ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
                {sheetsMsg.text}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-accent/5 border border-accent/20 p-6 rounded-2xl flex gap-4">
        <Info className="text-accent shrink-0" size={20} />
        <p className="text-xs text-slate-400 leading-relaxed">
          <span className="text-accent font-bold">Pro Tip:</span> These internal links are used globally throughout the site. Updating them here will automatically reflect changes in all "Floating Platform Badges" and the "Footer Social Icons".
        </p>
      </div>
    </div>
  );
}
