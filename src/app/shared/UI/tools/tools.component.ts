import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent {

  constructor(private authService: AuthService,
) { }


  /**
   * Cierra la sesión del usuario.
   */
  logout() {
    this.authService.logout();
  }
}
