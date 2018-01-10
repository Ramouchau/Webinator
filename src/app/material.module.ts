import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatToolbarModule,
	MatSidenavModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatCardModule,
	MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
	imports: [CommonModule],
	exports: [
		MatToolbarModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatCardModule,
		MatProgressSpinnerModule
	]
})
export class MaterialModule { }
