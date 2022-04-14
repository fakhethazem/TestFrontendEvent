import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: 'login' , component: LoginComponent},
  { path: 'home', component: HomeComponent  },
  { path: 'register' , component:RegisterComponent},
  { path: 'forgot' , component:ForgotComponent},
  { path: 'profile' , component:ProfileComponent},



]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
