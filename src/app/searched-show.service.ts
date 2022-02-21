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
  return this.httpClient.get<ISearchedShowsData>(`https://api.tvmaze.com/search/shows?q=${name}`).pipe(map(data=>this.transformToISearchedShows(data)))
 }

private transformToISearchedShows(data:ISearchedShowsData){
  return  {
    name:  data.show.name,
    language: data.show.language,
    // genres: data.show.genres,
    // schedule: data.show.schedule.days,
    rating: data.show.rating.average,
    image: data.show.image.medium,
    summary: data.show.summary,
    network: data.show.network.name
  }
}

}
