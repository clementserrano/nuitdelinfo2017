import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  users: Array<any>;

  constructor(private _dataService: DataService) { 
    this._dataService.getUsers()
    .subscribe(res => this.users = res);
  }

  ngOnInit() {
  }

}
