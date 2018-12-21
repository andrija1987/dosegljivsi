module.exports = {
  apps : [{
    name: 'UpTime',
    script: './app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    output: './logs/uptime/out.log',
    error: './logs/uptime/error.log',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },
  {
    name: 'UpTime Monitor',
    script: './monitor.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    output: './logs/monitor/out.log',
    error: './logs/monitor/error.log',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {}
};
