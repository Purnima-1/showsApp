import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ISearchedShowsData } from './isearched-shows-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchedShowService {


  constructor(private httpClient: HttpClient) { }
  
//  getShows(name:string){
//   return this.httpClient.get<ISearchedShowsData>(`https://api.tvmaze.com/singlesearch/shows?q=${name}`).pipe(map(data=> this.transformToISearchedShows(data)))
//  }
 getShows(name:string){
  return this.httpClient.get<ISearchedShowsData[]>(`https://api.tvmaze.com/search/shows?q=${name}`).pipe(map((data)=> {
    return data.map((show)=> {return this.transformToISearchedShows(show)})}))
 }
 private getImage(image: any) {
  let isImage;

  return (isImage = image
    ? image.medium 
    : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png');
    
}

private isNull(item:any) {
  let notNull;
  return (notNull = item ? item.name : null);
}


private transformToISearchedShows(shows:ISearchedShowsData){
  return  {
    name:  shows.show.name,
    language: shows.show.language,
    genres: shows.show.genres,
     schedule: shows.show.schedule.time,
     
    rating: shows.show.rating.average,
    image: this.getImage(shows.show.image),
    
    summary: shows.show.summary,
    network: this.isNull(shows.show.network)
      }
}
}
