import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;

  positions: [
    {
      date: "07-12-2017",
      nom: "Accident",
      lat: 51.678418,
      lng: 7.809007
    },
    {
      date: "06-12-2017",
      nom: "Accident",
      lat: 51.678419,
      lng: 7.809007
    },
    {
      date: "05-12-2017",
      nom: "Accident",
      lat: 51.678420,
      lng: 7.809007
    }
  ];

  markedPositions: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  mark(position){
    this.markedPositions.push(position);
  }
}
