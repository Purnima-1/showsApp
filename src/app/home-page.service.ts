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
        return (image ? image.medium
       : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png');
      
  }
  private isNull(item:any) {
    return (item ? item.name : null);
  }  
  
   private transformToIHomePage(homeshows:IHomePageData){
     return {
       name: homeshows.show.name,
       image: this.getImage(homeshows.show.image),
       network: this.isNull(homeshows.show.network),
       language: homeshows.show.language,
       genres: homeshows.show.genres,
         schedule: homeshows.show.schedule.time,
     }
   }
}
