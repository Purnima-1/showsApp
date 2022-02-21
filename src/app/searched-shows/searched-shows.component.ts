import { Component, Input, OnInit } from '@angular/core';
import { ISearchedShows } from '../isearched-shows';
import { SearchedShowService } from '../searched-show.service';



@Component({
  selector: 'app-searched-shows',
  templateUrl: './searched-shows.component.html',
  styleUrls: ['./searched-shows.component.css']
})
export class SearchedShowsComponent implements OnInit {
  shows: ISearchedShows
  // panelOpenState = false;
  
  constructor(private searchedShowService: SearchedShowService) { 
    this.shows = { 
      name: "",
      language: "",
      rating: 0,
      image: "",
      summary: "",
      network: "",
      // genres: "",
      // schedule: ""
    }
    }
  ngOnInit(): void {
    this.searchedShowService.getShows('Gilmore girls')
    .subscribe(data => this.shows = data)
  }
}
