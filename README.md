# Музей оружейной культуры

Откройте [dist/index.html](dist/index.html) в современном браузере. Экспонаты, фотографии, фильтры и тест работают локально. Для открытия ссылок на источники и загрузки веб-шрифтов нужен интернет.

## Публикация через GitHub Actions

Все файлы сайта находятся в папке `dist/`. Дополнительная сборка не требуется.

1. Загрузите содержимое этой папки проекта в GitHub-репозиторий. Файл `.github/workflows/deploy-pages.yml` должен оказаться в корне репозитория по этому пути, а папка `dist/` — рядом с ним.
2. В репозитории откройте **Settings → Pages → Build and deployment → Source** и выберите **GitHub Actions**.
3. Используйте ветку `main`. После отправки изменений workflow опубликует сайт автоматически. Для ручного запуска откройте **Actions → Deploy museum to GitHub Pages → Run workflow**.
4. Дождитесь успешного задания `deploy`. Ссылка появится в окружении `github-pages` и разделе **Settings → Pages**.

Настройка основана на [документации GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Иллюстрации

Авторы музейных фотографий и условия их лицензий указаны в карточках. Фотографии адаптированы для экрана. Художественная панорама зала и учебные иллюстрации созданы встроенным инструментом ImageGen.

- [Панорама](dist/assets/gallery.webp)
- [Макет](dist/assets/model.webp)
- [Очки и наушники](dist/assets/protection.webp)
- [Сейф](dist/assets/safe.webp)
- [Табличка](dist/assets/sign.webp)
