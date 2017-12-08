// Modules
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import {PanelModule} from 'primeng/primeng';
import {InputTextareaModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import {MenuModule} from 'primeng/primeng';

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
import { FirstAidsService } from './firstAids/first-aids.service';

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
    FormsModule,
    AppRoutingModule,
    PanelModule,
    InputTextareaModule,
    ButtonModule,
    MenuModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjj0UhymBQx2vR4v30HAdzA_xE6wQmieg'
    })
  ],
  providers: [DataService, FirstAidsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
