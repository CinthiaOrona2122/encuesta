import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  titulo = 'Encuesta de satisfacción';
  subtitulo = 'Encuesta de satisfacción de la Agencia de aprendizaje a lo largo de la vida.';


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'), Validators.maxLength(30)]],
      dni: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(20)]]
    });
  }

  ngOnInit(): void {
    LocalstorageService.clear();
  }


  get email() { return this.loginForm.controls['email']; }
  get dni() { return this.loginForm.controls['dni']; }


  /**
   * Envia los datos de acceso, email y dni, a la base de datos.
   */
  onSubmit() {
    const data = {
      email: this.email.value,
      dni: this.dni.value
    }
   try {
    this.authService.login(data).subscribe(      
      (res: any) => {      
        LocalstorageService.setItem('token', res.token);    
          this.router.navigate(['/home']);  
      },
      (err) => {
        console.log("Hubo un error al intentar loguearse",err);        
      });    
   } catch (error) {
    console.log("Error en el login: ", error);
   }
  }
}
