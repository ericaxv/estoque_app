import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  @Input() // permite a passagem de valor para outro atributo
  mensagem: string = '';
}
