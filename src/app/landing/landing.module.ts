import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { StyleClassModule } from 'primeng/styleclass';
import { AnimateEnterDirective } from './animateenter.directive';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    ButtonModule,
    RouterModule,

    FormsModule,
    InputTextModule,
    InputTextareaModule,

    // primeNg
    DynamicDialogModule,
    ToastModule,
    StyleClassModule,
  ],
  declarations: [LandingComponent, AnimateEnterDirective, ContactUsComponent],
  providers: [DialogService, MessageService],
})
export class LandingModule {}
