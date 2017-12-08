import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 43.599889;
  lng: number = 1.443425;

  positions: Array<any>;
  markedPositions: Array<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getAccidents()
    .subscribe(res => {
      res.forEach(function(p){
        p.lattitude = Number(p.lattitude);
        p.longitude = Number(p.longitude);
      });
      this.positions = res;
    });
  }

  ngOnInit() {
  }

  mark(position){
    //this.markedPositions.push(position);
  }
}
