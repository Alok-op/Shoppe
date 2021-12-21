import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountAssistanceComponent } from './components/account-assistance/account-assistance.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'login', children: [
    { path: '', component: LoginComponent },
    { path: 'assistance', component: AccountAssistanceComponent}
  ] },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
