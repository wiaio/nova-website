import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ContactUsComponent } from '../landing/components/contact-us/contact-us.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopbarComponent {
  @ViewChild('menubutton') menuButton!: ElementRef;

  scrollPosition = 0;

  ref: DynamicDialogRef | undefined;

  constructor(
    public layoutService: LayoutService,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  onMenuButtonClick() {
    this.layoutService.onMenuToggle();
  }

  onProfileButtonClick() {
    this.layoutService.showProfileSidebar();
  }
  onConfigButtonClick() {
    this.layoutService.showConfigSidebar();
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    this.scrollPosition = window.pageYOffset;
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
}
