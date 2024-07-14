import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUpdateProfile } from '../interfaces/updateProfile';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css'],
})
export class ProfileUpdateComponent {
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    email: new FormControl('', Validators.required),
    isActive: new FormControl(false),
    country: new FormControl(''),
    experience: new FormControl(''),
  });

  edit = false;
  profileId: string | null = null;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.profileId = params.get('id');
      if (this.profileId) {
        this.edit = true;

        this.profileService.findById(this.profileId).subscribe((profile) => {
          this.profileForm.patchValue(profile);
        });
      }
    });
  }

  onSubmit() {
    const profile = this.profileForm.value as IUpdateProfile;

    this.profileService.update(profile).subscribe((result) => {
      Swal.fire({
        title: 'Pessoa atualizada com sucesso!',
        text: 'Sucesso!',
        icon: 'success',
      });
      this.router.navigateByUrl('/profile');
    });
  }
}
