import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../home-page.service';
import { IHomePage } from '../i-home-page';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  shows: IHomePage[]
  constructor(private homePageService: HomePageService) { 
    this.shows = [{ 
      name: "",
      image: ""
      
    }]
  }
  ngOnInit(): void {
    this.homePageService.displayShows(new Date)
    // .subscribe(data => console.log(data))
     .subscribe(data => this.shows = data)
  }

}
