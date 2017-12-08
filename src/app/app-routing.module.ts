import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { MapComponent } from './map/map.component';
import { FirstAidsComponent } from './firstAids/firstAids.component';
import { EmergencyComponent } from './emergency/emergency.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'map', component: MapComponent },
  { path: 'firstAids', component: FirstAidsComponent },
  { path: 'emergency', component: EmergencyComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }