import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Subscription } from 'rxjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  darkMode: boolean = false;

  ref: DynamicDialogRef | undefined;

  layoutContainer: HTMLElement | null = null;

  constructor(
    public router: Router,
    private layoutService: LayoutService,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {
    this.subscription = this.layoutService.configUpdate$.subscribe(config => {
      this.darkMode = config.colorScheme === 'dark' || config.colorScheme === 'dim' ? true : false;
    });
  }

  ngOnInit(): void {
    this.layoutContainer = document.getElementById('layoutContainer');
  }

  showContacUs() {
    this.ref = this.dialogService.open(ContactUsComponent, {
      header: 'Speak to Us',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });

    this.ref.onClose.subscribe(product => {
      if (product) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Email sent' });
      }
    });

    this.ref.onMaximize.subscribe(value => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
