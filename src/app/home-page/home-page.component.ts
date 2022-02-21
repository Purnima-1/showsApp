import { Component, OnInit } from '@angular/core';
import { ISearchedShows } from '../isearched-shows';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // shows: ISearchedShows[]= []
  constructor() { 
  //   this.shows = [{ 
  //     name: "",
  //     schedule: "",
  //     language: "",
  //     image: ""
  //   }
  // ]
  }
  ngOnInit(): void {
  }

}
