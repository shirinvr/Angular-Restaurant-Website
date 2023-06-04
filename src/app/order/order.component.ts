import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }
  
  scroll = (): void => {
    const scrollToTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollToTop > 200) {
      const goToTop = document.getElementById('go-to-top');
      if (goToTop) {
        goToTop.style.display = 'block';
      }
    } else {
      const goToTop = document.getElementById('go-to-top');
      if (goToTop) {
        goToTop.style.display = 'none';
      }
    }
  }
  
  scrollToTop(): void {
    (function smoothscroll(): void {
      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
}
