# Деплой приложения на сервер с использованием pm2
ip сервера - 158.160.154.218
frontend - https://deploy-pm2.nomorepartiessite.ru
backend - https://api.deploy-pm2.nomorepartiessite.ru


MSYS_NO_PATHCONV=1 pm2 deploy ecosystem.config.js production  - комана для деплоя