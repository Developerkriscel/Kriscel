"use client";

import { useEffect, useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  Newspaper,
  Eye,
  EyeOff,
} from "lucide-react";
import { API_URL } from "@/lib/api";

interface Insight {
  _id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  accent: string;
  excerpt: string;
  status: "published" | "draft";
  createdAt: string;
}

const ACCENT_OPTIONS = [
  { label: "Blue → Indigo", value: "from-accent to-accent" },
  { label: "Emerald → Teal", value: "from-emerald-500 to-teal-600" },
  { label: "Violet → Fuchsia", value: "from-violet-500 to-fuchsia-600" },
  { label: "Rose → Pink", value: "from-rose-500 to-pink-600" },
  { label: "Amber → Orange", value: "from-amber-500 to-orange-600" },
  { label: "Cyan → Sky", value: "from-accent to-accent" },
];

const CATEGORY_OPTIONS = [
  "Technology",
  "Marketing",
  "Services",
  "Business",
  "Industry",
  "Automation",
  "E-commerce",
  "Recruitment",
];

const EMPTY_FORM = {
  title: "",
  category: "Technology",
  date: new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  image: "/images/blue_glass_abstract.png",
  accent: "from-accent to-accent",
  excerpt: "",
  status: "published" as const,
};

export default function AdminInsightsPage() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [form, setForm] = useState<{
    title: string;
    category: string;
    date: string;
    image: string;
    accent: string;
    excerpt: string;
    status: "published" | "draft";
  }>(EMPTY_FORM);

  const token =
    typeof window !== "undefined"
      ? localStorage.getItem("kriscel_admin_token")
      : null;

  const fetchInsights = async () => {
    try {
      // Get all insights (published + draft) for admin
      const allRes = await fetch(
        `${API_URL}/insights?status=published`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const draftRes = await fetch(
        `${API_URL}/insights?status=draft`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const pubData = await allRes.json();
      const draftData = await draftRes.json();
      const combined = [
        ...(pubData.data || []),
        ...(draftData.data || []),
      ];
      setInsights(combined);
    } catch (err) {
      console.error("Failed to fetch insights", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`${API_URL}/upload/insight`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setForm({ ...form, image: data.url });
      }
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const url = editing
        ? `${API_URL}/insights/${editing}`
        : `${API_URL}/insights`;
      const method = editing ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm(EMPTY_FORM);
        setShowForm(false);
        setEditing(null);
        fetchInsights();
      }
    } catch (err) {
      console.error("Submit error", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await fetch(`${API_URL}/insights/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchInsights();
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  const handleEdit = (insight: Insight) => {
    setForm({
      title: insight.title,
      category: insight.category,
      date: insight.date,
      image: insight.image,
      accent: insight.accent,
      excerpt: insight.excerpt,
      status: insight.status,
    });
    setEditing(insight._id);
    setShowForm(true);
  };

  const handleToggleStatus = async (insight: Insight) => {
    const newStatus =
      insight.status === "published" ? "draft" : "published";
    await fetch(`${API_URL}/insights/${insight._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchInsights();
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
            <Newspaper className="text-accent" size={28} />
            Blogs & Articles
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage blog posts and articles displayed on the dedicated blogs page.
          </p>
        </div>
        <button
          onClick={() => {
            setForm(EMPTY_FORM);
            setEditing(null);
            setShowForm(!showForm);
          }}
          className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent text-white rounded-xl font-bold text-sm transition-colors"
        >
          {showForm ? (
            <>
              <X size={16} /> Cancel
            </>
          ) : (
            <>
              <Plus size={16} /> New Blog
            </>
          )}
        </button>
      </div>

      {/* Create/Edit Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 mb-8 space-y-5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Title *
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 outline-none focus:border-accent/50 focus:ring-2 ring-accent0/10 transition-all text-sm"
                placeholder="Enter article title..."
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Category
              </label>
              <select
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-accent/50 focus:ring-2 ring-accent0/10 transition-all text-sm"
              >
                {CATEGORY_OPTIONS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Date
              </label>
              <input
                type="text"
                value={form.date}
                onChange={(e) =>
                  setForm({ ...form, date: e.target.value })
                }
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 outline-none focus:border-accent/50 focus:ring-2 ring-accent0/10 transition-all text-sm"
                placeholder="March 27, 2026"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Accent Gradient
              </label>
              <select
                value={form.accent}
                onChange={(e) =>
                  setForm({ ...form, accent: e.target.value })
                }
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-accent/50 focus:ring-2 ring-accent0/10 transition-all text-sm"
              >
                {ACCENT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Image Path / Upload
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={form.image}
                  onChange={(e) =>
                    setForm({ ...form, image: e.target.value })
                  }
                  className="flex-1 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 outline-none focus:border-accent/50 focus:ring-2 ring-accent0/10 transition-all text-sm"
                  placeholder="/images/my-article.png"
                />
                <label className="cursor-pointer px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xs flex items-center gap-2 transition-colors whitespace-nowrap">
                  {isUploading ? (
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Plus size={16} />
                  )}
                  {isUploading ? "Uploading..." : "Upload File"}
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileUpload}
                    disabled={isUploading}
                  />
                </label>
              </div>
              {form.image && (
                <div className="mt-4 w-40 h-24 rounded-xl overflow-hidden border border-slate-800 relative group">
                  <img
                    src={form.image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-[10px] text-white font-bold uppercase tracking-widest">
                      Preview
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Excerpt
              </label>
              <textarea
                value={form.excerpt}
                onChange={(e) =>
                  setForm({ ...form, excerpt: e.target.value })
                }
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 outline-none focus:border-accent/50 focus:ring-2 ring-accent0/10 transition-all text-sm resize-none h-24"
                placeholder="Brief summary of the article..."
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Status
              </label>
              <select
                value={form.status}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.value as "published" | "draft",
                  })
                }
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white outline-none focus:border-accent/50 focus:ring-2 ring-accent0/10 transition-all text-sm"
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 bg-accent hover:bg-accent text-white rounded-xl font-bold text-sm transition-colors"
            >
              <Save size={16} />
              {editing ? "Update Blog" : "Publish Blog"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditing(null);
                setForm(EMPTY_FORM);
              }}
              className="px-6 py-2.5 text-slate-400 hover:text-white rounded-xl font-bold text-sm transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Insights List */}
      {loading ? (
        <div className="text-center py-20 text-slate-500">Loading...</div>
      ) : insights.length === 0 ? (
        <div className="text-center py-20">
          <Newspaper size={48} className="mx-auto text-slate-700 mb-4" />
          <p className="text-slate-500 font-medium">
            No insights yet. Click "New Insight" to create your first post.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {insights.map((insight) => (
            <div
              key={insight._id}
              className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 flex items-center gap-5 hover:border-slate-700 transition-colors group"
            >
              {/* Thumbnail */}
              <div className="w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-800">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/images/blue_glass_abstract.png";
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                      insight.status === "published"
                        ? "bg-emerald-500/20 text-emerald-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}
                  >
                    {insight.status}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r ${insight.accent} text-white`}
                  >
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-white font-bold text-sm truncate">
                  {insight.title}
                </h3>
                <p className="text-slate-500 text-xs mt-0.5">
                  {insight.date}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleToggleStatus(insight)}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  title={
                    insight.status === "published"
                      ? "Unpublish"
                      : "Publish"
                  }
                >
                  {insight.status === "published" ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
                <button
                  onClick={() => handleEdit(insight)}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-accent transition-colors"
                >
                  <Pencil size={16} />
                </button>
                <button
                  onClick={() => handleDelete(insight._id)}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
