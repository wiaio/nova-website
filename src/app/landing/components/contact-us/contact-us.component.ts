import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  options: any;

  overlays: any[] = [];

  dialogVisible: boolean = false;

  markerTitle: string = '';

  selectedPosition: any;

  infoWindow: any;

  draggable: boolean = false;

  name: string = '';

  email: string = '';

  message: string = '';
}
