import { Component, Input, OnInit } from '@angular/core';
import { ISearchedShows } from '../isearched-shows';
import { SearchedShowService } from '../searched-show.service';

@Component({
  selector: 'app-searched-shows',
  templateUrl: './searched-shows.component.html',
  styleUrls: ['./searched-shows.component.css']
})
export class SearchedShowsComponent implements OnInit {
    @Input() shows: ISearchedShows[]
    constructor(private searchedShowService: SearchedShowService) { 
    this.shows =[ { 
      name: "",
      language: "",
      image: "",
      summary: "",
      rating: 0,
      network: "",
       genres: [],
       schedule: "",
        }]
    }
  ngOnInit(): void {
    // this.searchedShowService.getShows('world')
    //  .subscribe(data => this.shows = data)
  }
}
