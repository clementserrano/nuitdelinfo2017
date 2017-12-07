// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

// Services
import { DataService } from './data.service';

// Component
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBjj0UhymBQx2vR4v30HAdzA_xE6wQmieg'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
