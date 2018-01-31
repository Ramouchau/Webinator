import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MatToolbarModule,
	MatSidenavModule,
	MatFormFieldModule,
	MatInputModule,
	MatButtonModule,
	MatCardModule,
	MatProgressSpinnerModule,
	MatIconModule,
	MatListModule
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
		MatProgressSpinnerModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule
	]
})
export class MaterialModule { }
