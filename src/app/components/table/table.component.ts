import { Component, Input } from '@angular/core';
import { IListProfile } from 'src/app/interfaces/listProfile';
import { ProfileService } from 'src/app/services/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() profiles: IListProfile[] = [];

  constructor(private profileService: ProfileService) {}

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
