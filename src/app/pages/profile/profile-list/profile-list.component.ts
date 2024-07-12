import { Component } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent {
  constructor(private profileService: ProfileService) {}

  profiles: Profile[];

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
