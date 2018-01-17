import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { APILoginInputs } from '../_services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	public loginForm: FormGroup;
	public emailCtrl: FormControl;
	public passwordCtrl: FormControl;

	public constructor(
		private http: HttpClient,
		private router: Router
	) { /**/ }

	public ngOnInit() {
		this._createForm();
	}

	public onLoginSubmit() {
		if (this.loginForm.valid)
			console.log('test');
		/*this.http.post('/api/login', this.user).subscribe((data) => {
			this.router.navigate(['/home']);
		});*/
	}

	private _createForm() {
		this.emailCtrl = new FormControl('', [Validators.email, Validators.required]);
		this.passwordCtrl = new FormControl('', [Validators.minLength(6), Validators.required]);

		this.loginForm = new FormGroup({
			email: this.emailCtrl,
			password: this.passwordCtrl
		});
	}
}
