// Modules
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import {PanelModule} from 'primeng/primeng';

// Services
import { DataService } from './data.service';

// Component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MapComponent } from './map/map.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { FirstAidsComponent } from './firstAids/firstAids.component';
import { ChatbotComponent } from './chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MapComponent,
    EmergencyComponent,
    FirstAidsComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    PanelModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
