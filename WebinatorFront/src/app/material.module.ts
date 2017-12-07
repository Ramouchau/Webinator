import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatSidenavModule } from '@angular/material';

@NgModule({
	imports: [MatToolbarModule, MatSidenavModule],
	exports: [MatToolbarModule, MatSidenavModule],
})
export class MaterialModule { }
