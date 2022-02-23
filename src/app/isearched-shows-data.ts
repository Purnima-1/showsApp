export interface ISearchedShowsData {
    
   
       show:{
           name:string,
       language: string,
       rating:{
        average: number
       } ,
       image: {
           medium: string | any
       },
       summary: string,
       network: {
           name:string
       }}
        //genres: []
    //    schedule: {
    //        time: string,
    //        days: []
    //    }
   
}
