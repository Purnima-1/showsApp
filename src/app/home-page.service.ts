import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IHomePageData } from './i-home-page-data';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private httpClient: HttpClient) { }
  displayShows(latest_Date: Date){
    return this.httpClient.get<IHomePageData[]>(`https://api.tvmaze.com/schedule?country=US&${latest_Date}`).pipe(map((data)=> {
      return data.map((show)=> {return this.transformToIHomePage(show)})}))
   }
   private getImage(image: any) {
    let isImage;
  
    return (isImage = image
      ? image.medium
      : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png');
  }
  

   private transformToIHomePage(shows:IHomePageData){
     return {
       name: shows.show.name,
       image: this.getImage(shows.show.image)
     }
   }
}
