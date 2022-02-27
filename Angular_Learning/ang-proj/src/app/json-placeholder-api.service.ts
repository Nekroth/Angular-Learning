import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RemotePost {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderApiService {

  private readonly apiURL = 'https://jsonplaceholder.typicode.com/posts'
  
  constructor(private httpClient: HttpClient) { }

  //Observable --> Subscribe
  getAllPosts(): Observable<Array<RemotePost>> {
    //GET https://jsonplaceholder.typicode.com/posts
    return this.httpClient.get<Array<RemotePost>>(this.apiURL);
  }

  getPostById(id: number): Observable<RemotePost> {
    return this.httpClient.get<RemotePost>(this.apiURL + "/" + id);
  }

  getComments(id: number) {

  }
}
