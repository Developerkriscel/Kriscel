module.exports = {
  apps: [
    {
      name: 'kriscel-api',
      cwd: './server',
      script: 'index.js',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      }
    },
    {
      name: 'kriscel-web',
      cwd: './client',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
