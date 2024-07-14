import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICreateProfile } from '../interfaces/createProfile';
import { IUpdateProfile } from '../interfaces/updateProfile';
import { IListProfile } from '../interfaces/listProfile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = 'http://localhost:3000/profiles';

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<IListProfile[]>(this.api);
  }

  register(profile: ICreateProfile) {
    return this.httpClient.post<ICreateProfile>(this.api, profile);
  }

  findById(profileId: string) {
    return this.httpClient.get(`${this.api}/${profileId}`);
  }

  update(profile: IUpdateProfile) {
    return this.httpClient.put<IUpdateProfile>(
      `${this.api}/${profile.id}`,
      profile
    );
  }

  delete(profileId: string) {
    return this.httpClient.delete(`${this.api}/${profileId}`);
  }
}
