import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RegisterService, APIRegisterInputs } from '../_services/register.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	public requestError: string = null;
	public registerForm: FormGroup;
	public passwords: FormGroup;
	public emailCtrl: FormControl;
	public userNameCtrl: FormControl;
	public passwordCtrl: FormControl;

	public constructor(
		private _router: Router,
		private _registerService: RegisterService
	) { /**/ }

	public ngOnInit() {
		this._createForm();
	}

	public onRegisterSubmit() {
		if (this.registerForm.valid)
			this._registerService.register({
				email: this.emailCtrl.value,
				username: this.userNameCtrl.value,
				password: this.passwordCtrl.value
			})
				.then((data) => {
					if (data.error) {
						console.log('no', data.error);
						this.requestError = data.error.devInfo;
						return;
					}
					this._router.navigate(['/login']);
				})
				.catch((err) => {
					this.requestError = 'une erreur est survenue.';
				});
	}

	private _createForm() {
		this.emailCtrl = new FormControl('', [Validators.email, Validators.required]);
		this.userNameCtrl = new FormControl('', [Validators.minLength(3), Validators.required]);
		this.passwordCtrl = new FormControl('', [Validators.minLength(6), Validators.required]);

		this.registerForm = new FormGroup({
			email: this.emailCtrl,
			userName: this.userNameCtrl,
			password: this.passwordCtrl
		});
	}

	private _passwordMatchValidator(g: FormGroup) {
		return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true };
	}
}
