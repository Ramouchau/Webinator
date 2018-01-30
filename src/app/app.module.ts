import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { serverUrl } from '../env/api';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeService } from './_services/home.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './_services/login.service';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './_services/register.service';

const config: SocketIoConfig = { url: serverUrl, options: {} };

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		RegisterComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		SocketIoModule.forRoot(config)
	],
	providers: [
		LoginService,
		RegisterService,
		HomeService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
