import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {

  constructor(private _Renderer2: Renderer2){}

  @ViewChild('navBar', { static: false }) navElement!: ElementRef;

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.navElement) {
      if (window.scrollY > 20 && window.innerWidth >=  670) {
        this._Renderer2.addClass(this.navElement.nativeElement, 'px-5');
        this._Renderer2.addClass(this.navElement.nativeElement, 'shadow');
      } else {
        this._Renderer2.removeClass(this.navElement.nativeElement, 'px-5');
        this._Renderer2.removeClass(this.navElement.nativeElement, 'shadow');
      }
    }
  }
}
