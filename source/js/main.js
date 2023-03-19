import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './modules/form-validate/form';
import {initMenu} from './modules/menu';
import {initMap} from './modules/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initMenu();
    const form = new Form();
    window.form = form;
    form.init();

    const map = document.getElementById('map');
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        initMap({
          id: 'map',
          initials: {
            center: [59.9387165, 30.3230474],
            controls: [],
            zoom: 16,
          },
          placemark: [
            {
              hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
            },
            {
              iconImageHref: 'img/svg/icon-map-pin.svg',
              iconImageSize: [18, 22],
              iconLayout: 'default#image',
              iconShadow: false,
            }
          ],
        });

        observer.unobserve(map);
      }
    }, {
      rootMargin: '0px',
      threshold: 0,
    });

    observer.observe(map);
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
