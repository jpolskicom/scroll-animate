export function Parallax(elem = null, speed = .2, cb = null) {
  if (elem) {
    if (typeof elem === 'string') {
      this.parallaxItem = document.querySelector(elem);
    } else {
      this.parallaxItem = elem;
    }
    if (this.parallaxItem && cb != null) {
      this.item = {
        'top': this.parallaxItem.offsetTop,
        'height': this.parallaxItem.offsetHeight,
        'position': this.parallaxItem.offsetTop + this.parallaxItem.offsetHeight
      };
      window.addEventListener('scroll', () => {
        this.pageTop = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
        if (this.pageTop >= this.item.top && this.pageTop <= this.item.position + 200) {
          cb(this.parallaxItem, parseFloat((this.pageTop - (this.item.top * 3)) * speed));
        };
      });
    };
  };
};
