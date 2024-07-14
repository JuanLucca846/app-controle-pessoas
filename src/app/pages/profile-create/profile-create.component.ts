import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICreateProfile } from 'src/app/interfaces/createProfile';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css'],
})
export class ProfileCreateComponent {
  constructor(private profileService: ProfileService, private router: Router) {}

  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    role: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(70),
    ]),
    age: new FormControl(0, [Validators.required, Validators.min(0)]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(70),
    ]),
    isActive: new FormControl(false),
    country: new FormControl(''),
    experience: new FormControl(''),
  });

  onSubmit() {
    const profile = this.profileForm.value as ICreateProfile;

    this.profileService.register(profile).subscribe((result) => {
      Swal.fire({
        title: 'Nova pessoa cadastrada com sucesso!',
        text: 'Sucesso!',
        icon: 'success',
      });
      this.router.navigateByUrl('/profile');
    });
  }
}
