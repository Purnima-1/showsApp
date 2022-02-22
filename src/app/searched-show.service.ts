import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ISearchedShowsData } from './isearched-shows-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchedShowService {


  constructor(private httpClient: HttpClient) { }
  
 getShows(name:string){
  return this.httpClient.get<ISearchedShowsData>(`https://api.tvmaze.com/singlesearch/shows?q=${name}`).pipe(map(data=> this.transformToISearchedShows(data)))
 }

private transformToISearchedShows(data:ISearchedShowsData){
  return  {
    name:  data.name,
    language: data.language,
    // genres: data.show.genres,
    // schedule: data.show.schedule.days,
    rating: data.rating.average,
    image: data.image.medium,
    summary: data.summary
    // network: data.show.network.name
      }
}
}
