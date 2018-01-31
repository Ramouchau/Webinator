import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../_services/login.service';
import { user } from '../_models/user';
import { loginToken } from '../../env/localStorage';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	public loginForm: FormGroup;
	public emailCtrl: FormControl;
	public passwordCtrl: FormControl;
	public loginError: string;

	public constructor(
		private _router: Router,
		private _loginServices: LoginService
	) { /**/ }

	public ngOnInit() {
		this._createForm();
	}

	public onLoginSubmit() {
		if (this.loginForm.valid)
			this._loginServices.login({
				email: this.emailCtrl.value,
				password: this.passwordCtrl.value
			})
				.then((data) => {
					if (data.error) {
						this.loginError = data.error.devInfo;
						return;
					}
					localStorage.setItem(loginToken, data.contents.token);
					this._router.navigate(['/home']);
				})
				.catch((error) => {
					this.loginError = 'une erreur est survenue.';
				});
	}

	private _createForm() {
		this.emailCtrl = new FormControl('', [Validators.email, Validators.required]);
		this.passwordCtrl = new FormControl('', [Validators.minLength(8), Validators.required]);

		this.loginForm = new FormGroup({
			email: this.emailCtrl,
			password: this.passwordCtrl
		});
	}
}
