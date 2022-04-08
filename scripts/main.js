document.addEventListener('DOMContentLoaded',function(){
  const main = new Main();
  // hero.start();

  // const cb = function (el, inview) {
  //   if(inview) {
  //       const ta = new TweenTextAnimation(el);
  //       ta.animate(); 
  //   }
  // }

  // const so = new ScrollObserver('.tween-animate-title', cb);

  // const _inviewAnimation = function(el, inview) {
  //   if(inview){
  //     el.classList.add('inview');
  //   } else {
  //     el.classList.remove('inview');
  //   }
  // }

  // const so2 = new ScrollObserver('.cover-slide', this._inviewAnimation);

  // const header = document.querySelector('.header');
  // const _navAnimation = function(el, inview) {
  //   if(inview){
  //     header.classList.remove('triggered');
  //   } else {
  //     header.classList.add('triggered');
  //   }

  // const so3 = new ScrollObserver('.nav-trigger', _navAnimation, {once: false});
});

class Main {
  constructor(){
    this.header = document.querySelector('.header');
    this._observers = [];
    this._init();
  }

  _init(){
    new MobileMenu();
    this.hero = new HeroSlider('.swiper-container');
    this._scrollInit();
  }

  _inviewAnimation(el, inview) {
    if(inview){
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  }

  _navAnimation (el, inview) {
    if(inview){
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  }

  _textAnimation (el, inview) {
    if(inview) {
        const ta = new TweenTextAnimation(el);
        ta.animate(); 
    }
  }

  _toggleSlideAnimation(el, inview) {
    if(inview){
      this.hero.start();
    } else {
      this.hero.stop();
    }
  }

  _scrollInit() {
    this._observers.push(
      new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {once: false})
    );

    this._observers.push(
      new ScrollObserver('.cover-slide', this._inviewAnimation)
    );

    new ScrollObserver('.tween-animate-title', this._textAnimation);
    new ScrollObserver('swipwer-container', this._toggleSlideAnimation.bind(this), {once: false});
    this.hero.start();
  }
}

