import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollHelperService {

  constructor() { }

  /**
* Ajusta el contenido de la página para que se vea el 100% del viewport.
*/
  ajustarScrollSiEsNecesario() {
    //ajustar al medio del scroll segun viewportHeight
    const viewportHeight = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    const scrollY = window.scrollY;
    const scrollYMax = scrollHeight - viewportHeight;
    const scrollYMiddle = scrollYMax / 2;
    if (scrollY < scrollYMiddle) {
      window.scrollTo(0, scrollYMiddle);
    }
  }
}
