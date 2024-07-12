import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = 'http://localhost:3000/profiles';

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get(this.api);
  }
}
