import { Component } from '@angular/core';
import { ISearchedShows } from './isearched-shows';
import { SearchedShowService } from './searched-show.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  shows : ISearchedShows[] = [ { 
    name: "",
    language: "",
    image: "",
    summary: "",
    rating: 0,
    network: "",
     genres: [],
     schedule: "",
      }]
constructor(private searchedShowService: SearchedShowService){}
  doSearch(searchValue:string){
    const userInput = searchValue.split(',').map(s=> s.trim())
    this.searchedShowService.getShows(userInput[0])
    .subscribe(data => this.shows = data)
  }


} 
