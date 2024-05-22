import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Login } from '../../models/Login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  closeResult = '';
	formGroup!: FormGroup;
	loginValid = true;

	usuario: Login = {
        id:0,
        password: "",
        username: ""
  };

	password!:string
 	username!: string

   form: FormGroup = new FormGroup({
		username: new FormControl(''),
		password: new FormControl(''),
	});

	constructor(private router: Router) {}

  ngOnInit() {

			this.router.navigate(['/login']);

		}
	  
		onSubmit(): void {
		  this.loginValid = true;
		  this.router.navigateByUrl('/login');
	  
		}


	  login() {}
}
