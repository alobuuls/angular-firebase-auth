import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { VerifyEmailComponent } from "./components/verify-email/verify-email.component";
import { PasswordRecoverComponent } from "./components/password-recover/password-recover.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registrar', component: RegisterComponent},
  { path: 'verify-email', component: VerifyEmailComponent},
  { path: 'recuperar-contraseña', component: PasswordRecoverComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
