import { Component, OnInit } from '@angular/core';
import { LoginSendData } from '../_models/login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	public constructor(
		private http: HttpClient,
		private router: Router
	) { /**/ }

	public ngOnInit() { /* */
	}

	public login() {
		this.http.post('/api/login', {}).subscribe((data) => {
			this.router.navigate(['/home']);
		});
	}
}
