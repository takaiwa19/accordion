export default class AccordionMenu {
  constructor(elm) {
    this.elm = elm;
    this.contents = this.elm.querySelector('.p-accordion__contents');
    this.contentsWrap = this.elm.querySelector('.p-accordion__contents-wrap');
    this.title = this.elm.querySelector('.p-accordion__title');
    this.isOpened = false;
    this.isAnimate = false;

    this.on();
  }
  toggle() {
    if(this.isOpened) {
      this.elm.classList.remove('is-opened');
      this.contents.style.height = 0;
    } else {
      this.elm.classList.add('is-opened');
      this.getContentsHeight();
    }
  }
  getContentsHeight() {
    const contentsHeight = this.contentsWrap.getBoundingClientRect().height;
    this.contents.style.height = contentsHeight + 'px';
  }
  on() {
    this.title.addEventListener('click', () => {
      if(this.isAnimate) return;
        this.isAnimate = true;
        if(this.elm.classList.contains('is-opened')) {
          this.isOpened = true;
        } else {
          this.isOpened = false;
        }
        this.toggle();
    }, false);


    this.contents.addEventListener('transitionend', () => {
      this.isAnimate = false;
    });
  }
}
