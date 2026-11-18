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

### Запрос для панорамы

Photorealistic editorial photograph for a Russian-language virtual history museum website hero, very wide landscape. A quiet unoccupied museum gallery at night, two parallel dark olive walls and low walnut plinths with enclosed rectangular glass vitrines, displayed indistinct late 19th-century archival objects and one antique wood-stock long arm seen in distant side silhouette behind glass only, small flat cream accession cards without readable markings. Cinematic soft amber lights and atmospheric blue-gray shadows. View straight into the room at a slight diagonal. Main illuminated vitrine on the right, left third predominantly deep olive shadow with no subjects for an HTML headline. Restrained, naturalistic, elegant and educational, dust-free lens, authentic museum architecture, warm reflections, subtle grain. No people, no text, no watermarks, no foreground close-up.

### Запрос для учебных иллюстраций

Create one 2x2 photographic contact sheet for an educational museum on firearm safety. Four separate warmly lit product photographs on consistent matte warm ivory stone backdrops, straight front or slightly overhead angle, crisp authentic objects, natural soft shadows. The sheet is landscape 3:2, partitioned into four equal rectangles, no margins and no borders. Each subject is fully contained and centered within its own quadrant, with space around it. Top left: solid bright blue plastic training dummy with a generic compact pistol silhouette, rounded and no realistic moving components, beside a blank ivory inventory tag. Top right: clear protective glasses sitting beside olive green over-ear hearing protectors. Bottom left: a closed small charcoal steel security lockbox viewed from the front three-quarter angle, visible closed door with ordinary keyhole, empty surroundings. Bottom right: a single cream museum rules placard with a dark red pictogram of an open hand crossed out inside a circle, leaning on an off-white plinth. No legible text anywhere. No humans, no realistic firearms, no logos. Each subject distinct and centered within quadrant, no elements across center axes.
