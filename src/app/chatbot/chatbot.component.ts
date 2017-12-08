import { Component, OnInit } from '@angular/core';
import {InputTextareaModule} from 'primeng/primeng';
import {ChatbotService} from './chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  chatText: string;
  chatInput: string;
  constructor(private chatbotService: ChatbotService) { }

  ngOnInit() {
    this.chatText = '';
    this.chatInput = '';
  }

  onSend() {
    this.chatText = this.chatText + 'You: ' + this.chatInput + '\n';
    this.chatbotService.ask(this.chatInput)
    .then(res => this.chatText = this.chatText + 'Bot: ' + res + '\n')
    .catch(err => this.chatText = this.chatText + 'ERREUR: ' + err + '\n');
    this.chatInput = '';
  }

}
