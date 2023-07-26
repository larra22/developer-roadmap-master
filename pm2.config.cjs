module.exports = {
    apps: [
      {
        name: 'roadmap',
        script: 'npm',
        args: 'run dev -- --host',
        watch: '.',
        instances: '1',
        autorestart: true,
        exec_mode: 'fork',
        env: {
          NODE_ENV: 'development',
        },
        env_production: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  