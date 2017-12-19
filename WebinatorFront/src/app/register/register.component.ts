import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	public registerForm: FormGroup;
	public passwords: FormGroup;
	public emailCtrl: FormControl;
	public userNameCtrl: FormControl;
	public passwordCtrl: FormControl;

	public constructor(
		private http: HttpClient,
		private router: Router
	) { /**/ }

	public ngOnInit() {
		this._createForm();
	}

	public onRegisterSubmit() {
		if (this.registerForm.valid)
			console.log('test');
		/*this.http.post('/api/register', this.user).subscribe((data) => {
			this.router.navigate(['/home']);
		});*/
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
