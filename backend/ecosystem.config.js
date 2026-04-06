require('dotenv').config({ path: '../.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master', DEPLOY_SSH_KEY, REPO_URL
} = process.env;


module.exports = {
  apps: [{
    name: 'api-service',
    script: './dist/app.js',
    cwd: '/home/user/nodejs-pm2-deploy/current/backend',
    // env: {
    //   NODE_ENV: 'production',
    //   PORT: 3001
    // }
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      key: DEPLOY_SSH_KEY,
      ref: DEPLOY_REF,
      repo: REPO_URL,
      path: DEPLOY_PATH,
      'pre-deploy-local': `scp -i ${DEPLOY_SSH_KEY} ./.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/current/backend`,
      'post-deploy': 'source ~/.nvm/nvm.sh && nvm use default && cd backend && npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    },
  },
};