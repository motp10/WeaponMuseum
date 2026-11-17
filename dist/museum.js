const safetyGuide = [
  'Памятка по безопасности, ATF',
  'https://www.atf.gov/firearms/docs/guide/safety-and-security-firearm-owners-atf-p-530022',
];

const exhibits = [
  {
    id: 'mosin', group: 'history', label: '1891 · Винтовка',
    title: 'Винтовка Мосина',
    summary: 'Деревянная ложа и длинный профиль рубежа XIX–XX веков.',
    history: 'Винтовку, разработанную на основе образца Сергея Мосина, приняли на вооружение Российской империи в 1891 году. В 1930 году в СССР появилась модернизированная версия. На музейной фотографии показан драгунский вариант образца 1891 года.',
    exterior: 'В профиль заметны длинная деревянная ложа, приклад и выступающая передняя часть металлического ствола. Ложа — деревянная часть, которая образует основание внешнего контура этого образца.',
    safety: 'Возраст и следы износа не показывают, безопасен ли предмет. В музее осматривайте образец через витрину.',
    source: ['Ульяновский областной краеведческий музей, карточка винтовки', 'https://ar.culture.ru/ru/subject/vintovka-mosina-obrazca-1891-g'],
    photo: ['Armémuseum', 'https://commons.wikimedia.org/wiki/File:Mosin-Nagant_M1891.png', 'CC0 1.0', 'https://creativecommons.org/publicdomain/zero/1.0/'],
  },
  {
    id: 'nagant', group: 'history', label: '1895 · Револьвер',
    title: 'Револьвер Нагана',
    summary: 'Образец бельгийского конструктора Леона Нагана.',
    history: 'Револьвер системы Леона Нагана приняли на вооружение российской армии в 1895 году. После первых поставок из Бельгии его производство организовали в России.',
    exterior: 'Цилиндрический барабан в центре рамки помогает распознать револьвер по силуэту. Сзади расположена рукоять с накладками, спереди виден ствол.',
    safety: 'Если предмет похож на револьвер, не трогайте его и не пытайтесь выяснить его состояние. Сообщите сотруднику музея или преподавателю.',
    source: ['ГМЗ «Царское Село», карточка револьвера', 'https://ar.culture.ru/ru/subject/7-62-mm-revolver-nagana-obr-1895-g'],
    photo: ['Vitaly V. Kuzmin', 'https://commons.wikimedia.org/wiki/File:Nagant_M1895_Revolver_in_Tula_State_Arms_Museum_-_2016_01.jpg', 'CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'],
  },
  {
    id: 'tt', group: 'history', label: '1933 · Пистолет',
    title: 'Пистолет ТТ',
    summary: 'Тульский образец из истории промышленности 1930-х годов.',
    history: 'В начале 1930-х годов группа Фёдора Токарева разработала пистолет на Тульском оружейном заводе. Название ТТ расшифровывают как «Тульский Токарева». Карточка посвящена образцу 1933 года.',
    exterior: 'У ТТ плоский силуэт, прямоугольный кожух-затвор и накладки на рукояти. На задней части кожуха в профиль заметны вертикальные насечки.',
    safety: 'Компактный размер предмета не уменьшает риск. Если находка похожа на пистолет, оставьте её на месте и сообщите ответственному лицу.',
    source: ['Кировский областной краеведческий музей, карточка ТТ', 'https://ar.culture.ru/ru/subject/pistolet-tt-obr-1933-goda-1'],
    photo: ['Askild Antonsen', 'https://commons.wikimedia.org/wiki/File:Tokarev_TT33_(6825679152).jpg', 'CC BY 2.0', 'https://creativecommons.org/licenses/by/2.0/'],
  },
  {
    id: 'ppsh', group: 'history', label: '1941 · Пистолет-пулемёт',
    title: 'ППШ-41',
    summary: 'Образец Георгия Шпагина, связанный с военным производством 1940-х.',
    history: 'Образец 1941 года, разработанный Георгием Шпагиным, приняли на вооружение в декабре 1940 года. Во время Великой Отечественной войны его выпускали массово.',
    exterior: 'В профиль выделяются деревянный приклад, металлический кожух с отверстиями и круглый дисковый магазин на показанном варианте.',
    safety: 'Если рядом с историческим предметом лежит отдельная деталь, не подбирайте её. Оставьте находки на месте и сообщите ответственному лицу.',
    source: ['Музей Калининского фронта, карточка ППШ', 'https://ar.culture.ru/ru/subject/pistolet-pulemyot-shpagina-ppsh'],
    photo: ['501ghost', 'https://commons.wikimedia.org/wiki/File:PPsh-41_at_the_National_Museum_of_Scotland.jpg', 'CC0 1.0', 'https://creativecommons.org/publicdomain/zero/1.0/'],
  },
  {
    id: 'model', group: 'safety', label: 'Учебный предмет',
    title: 'Инертный макет',
    summary: 'Учебная копия для знакомства с формой и терминологией.',
    history: 'Учебные копии позволяют преподавателю показать общую форму предмета и назвать видимые части. В экспозиции представлен пример современного цельного макета.',
    exterior: 'На иллюстрации показана цельная синяя копия с условным силуэтом и учётной биркой. Внешний вид макетов зависит от их назначения.',
    safety: 'Цвет и сходство с известным макетом не подтверждают статус предмета. На занятии статус учебного образца подтверждает преподаватель.',
    source: ['Каталог «Артефакт», пример исторического учебного образца', 'https://ar.culture.ru/de/subject/pistolet-tt-4'],
  },
  {
    id: 'protection', group: 'safety', label: 'Средства защиты',
    title: 'Очки и наушники',
    summary: 'Средства индивидуальной защиты глаз и слуха.',
    history: 'В 1970-е годы американский институт NIOSH изучал, насколько хорошо средства защиты слуха снижают воздействие шума в реальных условиях. Такие исследования показали значение правильной посадки.',
    exterior: 'На иллюстрации очки имеют прозрачные линзы и широкую оправу. У наушников две чашки с мягкими краями, соединённые оголовьем.',
    safety: 'На учебной площадке заранее уточните у преподавателя, какие средства защиты требуются. Используйте их в зонах, где этого требуют правила.',
    source: ['NIOSH, история исследований по защите слуха', 'https://stacks.cdc.gov/view/cdc/215657'],
  },
  {
    id: 'safe', group: 'safety', label: 'Хранение',
    title: 'Запираемый сейф',
    summary: 'Закрытое хранилище с ограниченным доступом.',
    history: 'Запираемые шкафы и сейфы применяют для хранения предметов, доступ к которым должен контролироваться. Этот экспонат показывает, как организуют ограничение доступа.',
    exterior: 'На иллюстрации видны жёсткий металлический корпус, закрытая дверца и замок.',
    safety: 'Хранение должно исключать доступ детей и посторонних. Ключи также держат в недоступном для них месте.',
    source: safetyGuide,
  },
  {
    id: 'sign', group: 'safety', label: 'Правила экспозиции',
    title: 'Знак «Не трогать»',
    summary: 'Пиктограмма, которая обозначает границу безопасного осмотра.',
    history: 'В музейной экспозиции запрет касания помогает сохранить предмет и соблюдать границы осмотра. На учебной площадке похожий знак напоминает, где доступ контролирует преподаватель.',
    exterior: 'На светлой табличке изображена открытая ладонь, перечёркнутая красной линией внутри круга.',
    safety: 'Оставайтесь со стороны посетителя и не тянитесь через ограждение. Если предмет оказался вне витрины, сообщите сотруднику.',
    source: safetyGuide,
  },
];

const questions = [
  {
    title: 'Какой видимый признак помогает отличить револьвер Нагана на фотографии?',
    options: ['Длинная деревянная ложа', 'Цилиндрический барабан', 'Круглый дисковый магазин'],
    answer: 1,
    note: 'Барабан виден в центре рамки. Длинная ложа характерна для винтовки Мосина, а дисковый магазин показан на фотографии ППШ-41.',
  },
  {
    title: 'В коридоре лежит предмет, похожий на оружие. Что делать?',
    options: ['Перенести его в безопасное место', 'Подойти поближе, чтобы узнать модель', 'Оставить на месте, отойти и сообщить ответственному лицу'],
    answer: 2,
    note: 'Безопаснее соблюдать дистанцию и сообщить о предмете. Оценку его состояния оставьте специалисту.',
  },
  {
    title: 'Что подтверждает, что на занятии показывают учебный макет?',
    options: ['Указание преподавателя, который выдал образец', 'Яркий цвет корпуса', 'Отсутствие видимых повреждений'],
    answer: 0,
    note: 'Окраска и состояние поверхности сами по себе не подтверждают статус предмета.',
  },
  {
    title: 'Зачем в курсе показывают запираемый сейф?',
    options: ['Чтобы различать исторические образцы', 'Чтобы объяснить, как ограничивают доступ', 'Чтобы показать, как устроены средства защиты слуха'],
    answer: 1,
    note: 'Запираемое хранилище служит для ограничения доступа детей и посторонних.',
  },
];

const cards = document.querySelector('#exhibit-cards');
const filterCount = document.querySelector('#filter-count');
const dialog = document.querySelector('#exhibit-dialog');
const dialogContent = document.querySelector('#exhibit-detail');
const dialogPosition = document.querySelector('#dialog-position');
const previousExhibit = document.querySelector('#previous-exhibit');
const nextExhibit = document.querySelector('#next-exhibit');
const closeExhibit = dialog.querySelector('.close');
const quiz = document.querySelector('#quiz-panel');
let visibleExhibits = exhibits;
let activeExhibit = 0;
let opener;
let questionIndex = 0;
let score = 0;

function photoMarkup(exhibit, inDialog = false) {
  const extension = exhibit.photo ? 'jpg' : 'webp';
  return `<img class="exhibit-photo photo-${exhibit.id}" src="assets/${exhibit.id}.${extension}" alt="${inDialog ? exhibit.title + ', внешний вид' : ''}" ${inDialog ? '' : 'loading="lazy"'} decoding="async">`;
}

function renderCards(filter) {
  visibleExhibits = filter === 'all' ? exhibits : exhibits.filter(exhibit => exhibit.group === filter);
  filterCount.textContent = `${visibleExhibits.length} из ${exhibits.length}`;
  cards.innerHTML = visibleExhibits.map((exhibit, index) => `
    <article class="exhibit-card">
      <button type="button" class="card-button" data-index="${index}" aria-label="${exhibit.title}: открыть карточку">
        <span class="media">${photoMarkup(exhibit)}</span>
        <span class="card-copy">
          <span class="eyebrow card-label">${exhibit.label}</span>
          <span class="card-title">${exhibit.title}</span>
          <span class="card-description">${exhibit.summary}</span>
          <span class="card-arrow" aria-hidden="true">↗</span>
        </span>
      </button>
    </article>`).join('');
}

function externalLink([name, url]) {
  return `<a href="${url}" target="_blank" rel="noopener">${name} <span aria-hidden="true">↗</span></a>`;
}

function renderExhibit(index) {
  activeExhibit = index;
  const exhibit = visibleExhibits[index];
  dialogPosition.textContent = `Экспонат ${index + 1} из ${visibleExhibits.length}`;
  const photoCredit = exhibit.photo
    ? `Фото: ${externalLink(exhibit.photo)} · ${externalLink(exhibit.photo.slice(2))} · адаптировано для экрана`
    : 'Учебная иллюстрация, созданная с помощью ImageGen';
  dialogContent.innerHTML = `
    <p class="eyebrow detail-label">${exhibit.label}</p>
    <h2 id="exhibit-title" tabindex="-1">${exhibit.title}</h2>
    <figure><div class="media detail-media">${photoMarkup(exhibit, true)}</div><figcaption>${photoCredit}</figcaption></figure>
    <div class="detail-text">
      <section><h3>История и контекст</h3><p>${exhibit.history}</p></section>
      <section><h3>Внешние признаки</h3><p>${exhibit.exterior}</p></section>
      <section class="detail-safety"><h3>Безопасность</h3><p>${exhibit.safety}</p></section>
      <p class="detail-source">${externalLink(exhibit.source)}</p>
    </div>`;
  previousExhibit.disabled = index === 0;
  nextExhibit.disabled = index === visibleExhibits.length - 1;
}

document.querySelector('.filters').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button || button.getAttribute('aria-pressed') === 'true') return;
  document.querySelector('.filters [aria-pressed="true"]').setAttribute('aria-pressed', 'false');
  button.setAttribute('aria-pressed', 'true');
  renderCards(button.dataset.filter);
});

cards.addEventListener('click', event => {
  const button = event.target.closest('[data-index]');
  if (!button) return;
  opener = button;
  renderExhibit(Number(button.dataset.index));
  dialog.showModal();
  dialog.scrollTop = 0;
});

closeExhibit.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => opener?.focus());
function moveExhibit(offset) {
  renderExhibit(activeExhibit + offset);
  dialog.scrollTop = 0;
  dialog.querySelector('#exhibit-title').focus({preventScroll: true});
}
previousExhibit.addEventListener('click', () => moveExhibit(-1));
nextExhibit.addEventListener('click', () => moveExhibit(1));

function renderQuestion(shouldFocus = false) {
  const question = questions[questionIndex];
  if (question) {
    quiz.innerHTML = `
      <p class="eyebrow quiz-position">Вопрос ${questionIndex + 1} из ${questions.length}</p>
      <h3 id="question-title" tabindex="-1">${question.title}</h3>
      <div class="answers" role="group" aria-labelledby="question-title">
        ${question.options.map((option, index) => `<button type="button" data-answer="${index}" aria-disabled="false"><span aria-hidden="true">${['А', 'Б', 'В'][index]}</span>${option}</button>`).join('')}
      </div>
      <div id="quiz-feedback" role="status"></div>
      <button class="quiz-action" type="button" data-action="next" hidden>${questionIndex === questions.length - 1 ? 'Показать результат' : 'Следующий вопрос'} <span aria-hidden="true">→</span></button>`;
  } else {
    quiz.innerHTML = `
      <p class="eyebrow quiz-position">Результат</p>
      <h3 id="question-title" tabindex="-1">Правильных ответов: ${score} из ${questions.length}</h3>
      <p>${score === questions.length ? 'Вы распознали внешний признак револьвера и правильно выбрали правила безопасности.' : 'Загляните в карточки экспонатов и памятку, затем попробуйте ещё раз.'}</p>
      <button class="quiz-action" type="button" data-action="restart">Пройти ещё раз <span aria-hidden="true">↻</span></button>`;
  }
  if (shouldFocus) quiz.querySelector('#question-title').focus();
}

quiz.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button || button.getAttribute('aria-disabled') === 'true') return;
  if (button.hasAttribute('data-answer')) {
    const question = questions[questionIndex];
    const correct = Number(button.dataset.answer) === question.answer;
    if (correct) score++;
    for (const answer of quiz.querySelectorAll('[data-answer]')) {
      answer.setAttribute('aria-disabled', 'true');
      if (Number(answer.dataset.answer) === question.answer) answer.classList.add('correct');
    }
    if (!correct) button.classList.add('incorrect');
    quiz.querySelector('#quiz-feedback').textContent = `${correct ? 'Верно.' : 'Неверно.'} ${question.note}`;
    quiz.querySelector('[data-action="next"]').hidden = false;
    return;
  }
  if (button.dataset.action === 'restart') {
    score = 0;
    questionIndex = 0;
  } else {
    questionIndex++;
  }
  renderQuestion(true);
});

renderCards('all');
renderQuestion();
