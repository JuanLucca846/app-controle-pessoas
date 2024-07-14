import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './pages/profile/profile-list/profile-list.component';
import { ProfileCreateComponent } from './pages/profile-create/profile-create.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileListComponent,
  },
  {
    path: 'profile/create',
    component: ProfileCreateComponent,
  },
  {
    path: 'profile/edit/:id',
    component: ProfileUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
