import axios from "@/http/axios .ts";

export interface newsData {
    newsTitle:string
    newsType:number
    newsContent:string

}




export const newsList = (start:number,rows:number)=>{
    return axios({
        url:'/api/news/newsList',
        method:'GET',
        params:{
            currentPage:start,
            rows}
    })
}

// src/http/news.ts
export const getNewsById = (id: number) => {
    return axios({
        url: '/api/news/getNewsById',
        method: 'GET',
        params: { id }
    });
};