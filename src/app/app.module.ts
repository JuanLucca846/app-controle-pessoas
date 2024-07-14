import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ProfileListComponent } from './pages/profile/profile-list/profile-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileCreateUpdateComponent } from './pages/profile-create-update/profile-create-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from './services/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfileListComponent,
    ProfileCreateUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent],
})
export class AppModule {}
