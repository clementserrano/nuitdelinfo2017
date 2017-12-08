import { Component, OnInit } from '@angular/core';
import {InputTextareaModule} from 'primeng/primeng';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  chatText: string;
  chatInput: string;
  constructor() { }

  ngOnInit() {
    this.chatText = '';
    this.chatInput = '';
  }

  onSend() {
    // envoyer le message au serveur
    this.chatText = this.chatText + 'You: ' + this.chatInput + '\n';
    this.chatInput = '';
  }

}
