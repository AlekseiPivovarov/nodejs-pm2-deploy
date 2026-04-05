require('dotenv').config();

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master', DEPLOY_SSH_KEY, REPO_URL
} = process.env;


module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      key: DEPLOY_SSH_KEY,
      ref: DEPLOY_REF,
      repo: REPO_URL,
      path: DEPLOY_PATH,
      'post-deploy': 'source ~/.nvm/nvm.sh && nvm use default && cd frontend && export NODE_OPTIONS=--openssl-legacy-provider && npm install && npm run build'
    },
  },
}; 