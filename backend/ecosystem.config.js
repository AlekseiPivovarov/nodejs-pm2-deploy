module.exports = {
  apps: [{
    name: 'api-service',
    script: './dist/app.js',
    cwd: '/home/user/nodejs-pm2-deploy/current/backend',
    interpreter: "/home/user/.nvm/versions/node/v22.22.2/bin/npm",
  }],

  deploy: {
    production: {
      user: 'user',
      host: '158.160.154.218',
      key: 'C:/Users/aleks/.ssh/vm_access/privatekey',
      ref: 'origin/master',
      repo: 'git@github.com:AlekseiPivovarov/nodejs-pm2-deploy.git',
      path: '/home/user/nodejs-pm2-deploy',
      'ssh_options': 'StrictHostKeyChecking=no',
      'post-deploy': 'export PATH=$PATH:/home/user/.nvm/versions/node/v22.22.2/bin && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
    },
  },
};