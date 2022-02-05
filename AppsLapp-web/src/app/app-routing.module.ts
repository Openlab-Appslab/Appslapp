import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './User-operations/login/login.component';
import { RegistrationComponent } from './User-operations/registration/registration.component';


const routes: Routes = [
  {path: '', redirectTo: '/registration', pathMatch: 'full'},
  {path: 'registration', component: RegistrationComponent },
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
