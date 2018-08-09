import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllPost() {
    return this.httpClient.get(`${this.baseURL}/posts`).toPromise();
  }

  createPost(data) {
    return this.httpClient.post(`${this.baseURL}/posts`, data).toPromise();
  }

  
  
}
