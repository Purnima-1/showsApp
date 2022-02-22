export interface ISearchedShowsData {
    
   
       name:string,
       language: string,
       rating:{
        average: number
       } ,
       image: {
           medium: string,
       },
       summary: string,
       network: {
           name:string
       },
        //genres: []
    //    schedule: {
    //        time: string,
    //        days: []
    //    }
   
}
