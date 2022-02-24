export interface ISearchedShowsData {
    
   
       show:{
           name:string,
       language: string,
       genres: [],
       rating:{
        average: number
       } ,
       image: {
           medium: string | any
       },
       summary: string,
       network: {
           name:string
       },
       schedule: {
        time: string,
        days: []
    }
    }
    
       
   
}
