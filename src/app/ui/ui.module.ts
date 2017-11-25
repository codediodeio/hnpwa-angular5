import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
// import { AppRoutingModule } from '../app-routing.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

@NgModule({
  imports: [
    CommonModule,
    // AppRoutingModule
    RouterModule
  ],
  declarations: [TopNavComponent, LoadingSpinnerComponent, FooterNavComponent],
  exports: [TopNavComponent, LoadingSpinnerComponent, FooterNavComponent]
})
export class UiModule { }
