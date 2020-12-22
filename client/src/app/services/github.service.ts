import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  baseUrl = 'https://api.github.com/search/users?q=jeff';

  constructor(private http: HttpClient) { }

  search(model: any) {
    return this.http.get<Member[]>('https://api.github.com/search/users?q=' + model.searchName)
  }
}
