import { Component } from '@angular/core';
import { IListProfile } from 'src/app/interfaces/listProfile';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css'],
})
export class ProfileListComponent {
  constructor(private profileService: ProfileService) {}

  profiles: IListProfile[];

  ngOnInit() {
    this.findAllProfiles();
  }

  findAllProfiles() {
    this.profileService.findAll().subscribe(
      (result: IListProfile[]) => {
        this.profiles = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
