import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OffersComponent } from './offers/offers.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordConfirmComponent } from './reset-password-confirm/reset-password-confirm.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchUsersComponent } from './search-users/search-users.component';

const routes: Routes = [
 {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
 {path: "login", component: LoginComponent},
 {path: "logout", component: LogoutComponent, canActivate: [AuthGuard]},
 {path: "register", component: RegisterComponent},
 {path: "reset-password", component: ResetPasswordComponent},
 {path: "reset-password/confirm/:uid/:token", component: ResetPasswordConfirmComponent},
 {path: "profile", component: PersonalAreaComponent, canActivate: [AuthGuard]},
 {path: "users", component: SearchUsersComponent, canActivate: [AuthGuard]},
 {path: "chats", component: ChatsComponent, canActivate: [AuthGuard]},
 {path: "offers", component: OffersComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
