import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {FirstAidsService} from './first-aids.service';
@Component({
  selector: 'app-first-aids',
  templateUrl: './firstAids.component.html',
  styleUrls: ['./firstAids.component.css']
})
export class FirstAidsComponent implements OnInit {
  items: MenuItem[];
  firstAidsAdvices: string;
  constructor(private firstAidsService: FirstAidsService) { }

  ngOnInit() {
    this.items = [
      {label: 'Etouffement', icon: 'fa fa-ambulance', id: 'etouffement', command: (event) => this.displayAdvice('etouffement')},
      {label: 'Hemorragie', icon: 'fa fa-tint', id: 'hemorragie', command: (event) => this.displayAdvice('hemorragie')},
      {label: 'Inconscience', icon: 'fa fa-ambulance', id: 'inconscience', command: (event) => this.displayAdvice('inconscience')},
      {label: 'Arrêt Cardiaque', icon: 'fa fa-heart', id: 'arretcardiaque', command: (event) => this.displayAdvice('arretcardiaque')},
      {label: 'Brulûre', icon: 'fa fa-fire-extinguisher', id: 'brulure', command: (event) => this.displayAdvice('brulure')},
      {label: 'Plaies', icon: 'fa fa-medkit', id: 'plaies', command: (event) => this.displayAdvice('plaie')},
      {label: 'Fractures', icon: 'fa fa-wheelchair', id: 'fractures', command: (event) => this.displayAdvice('fracture')},
      {label: 'Protection et alerte', icon: 'fa fa-exclamation-triangle', id: 'protectionalerte',
       command: (event) => this.displayAdvice('protectionalerte')}
    ];
    this.firstAidsService.getAdvice('default')
    .then((res: string ) => this.firstAidsAdvices = res);
  }

  displayAdvice(itemId: string) {
    this.firstAidsService.getAdvice(itemId)
    .then((res: string ) => this.firstAidsAdvices = res);
  }
}
