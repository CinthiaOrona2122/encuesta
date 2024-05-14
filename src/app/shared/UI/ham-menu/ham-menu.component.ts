import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FullScreenService } from 'src/app/services/full-screen.service';


@Component({
  selector: 'app-ham-menu',
  templateUrl: './ham-menu.component.html',
  styleUrls: ['./ham-menu.component.css']
})
export class HamMenuComponent {
isFullscreen = false;

  constructor(
    private fullScreen: FullScreenService,
    private router: Router,) {
    this.checkFullscreen();

     }

  @ViewChild('hamMenu') hamMenu!: ElementRef;
  @ViewChild('offScreenMenu')
  offScreenMenu!: ElementRef;

  toggleMenu() {
    this.hamMenu.nativeElement.classList.toggle('active');
    this.offScreenMenu.nativeElement.classList.toggle('active');
  }


  // Detecta cambios en el estado de pantalla completa
  @HostListener('document:fullscreenchange', ['$event'])
  onFullscreenChange() {
    this.checkFullscreen();
  }

  openFullscreen() {
    const elem = document.documentElement;
    this.fullScreen.openFullscreen(elem);
  }

  closeFullscreen() {
    this.fullScreen.closeFullscreen();
  }

  checkFullscreen() {
    this.isFullscreen = this.fullScreen.isFullscreen();
  }

  regresar() {
    this.router.navigate(['/home']);
  }
}
