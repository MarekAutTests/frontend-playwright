# Настройка проекта и запуск тестов

- Склонируйте проект командой: 'git clone https://github.com/MarekAutTests/fe-playwright'
- В ".env" нужно вставить URL сайта: 'APP_URL=https://fe-delivery.tallinn-learning.ee/signin'
- Запустить все тесты командой: 'npx playwright test'
- Если нужно запустить поочередно в Crome через debug, то используем комманду: 'npx playwright test --project=chromium
  --debug'