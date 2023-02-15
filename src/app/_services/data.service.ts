import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from 'src/app/models/word';

@Injectable({
  providedIn: 'root'
})
export class dataService {
  baseUrl = "http://localhost:5000/"

  constructor(private http: HttpClient) { }

  searchName(query: string){
    return this.http.post<Word[]>(this.baseUrl+query, {payload: query},{
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*'
      })
    });
  }
}