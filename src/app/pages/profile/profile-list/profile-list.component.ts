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

  deleteProfile(profileId: string) {
    Swal.fire({
      title: 'Deseja deletar esse usuário ?',
      text: 'Confirme!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.profileService.delete(profileId).subscribe(() => {
          Swal.fire(
            'Usuário deletado!',
            'O perfil foi deletado com sucesso!',
            'success'
          );
          this.findAllProfiles();
        });
      }
    });
  }
}
