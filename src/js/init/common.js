import AccordionMenu from '../modules/AccordionMenu.js';

export default function() {
  const accordionItems = document.querySelectorAll('.p-accordion__item');
  const accordionMenus = [];
  for (var i = 0; i < accordionItems.length; i++) {
    accordionMenus[i] = new AccordionMenu(accordionItems[i]);
  }
};
