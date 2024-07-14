import { Component } from '@angular/core';
import { IListProfile } from 'src/app/interfaces/listProfile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent {
  constructor(private profileService: ProfileService) {}

  profiles: IListProfile[];

  ngOnInit() {
    this.profileService.findAll().subscribe(
      (result: any) => {
        this.profiles = result;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
