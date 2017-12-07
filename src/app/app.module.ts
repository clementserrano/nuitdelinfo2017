// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

// Services
import { DataService } from './data.service';

// Component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MapComponent } from './map/map.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { FirstAidsComponent } from './firstAids/firstAids.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MapComponent,
    EmergencyComponent,
    FirstAidsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
