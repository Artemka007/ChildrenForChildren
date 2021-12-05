import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
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
 {path: "home", component: HomeComponent},
 {path: "login", component: LoginComponent},
 {path: "logout", component: LogoutComponent},
 {path: "register", component: RegisterComponent},
 {path: "reset-password", component: ResetPasswordComponent},
 {path: "reset-password/confirm/:uid/:token", component: ResetPasswordConfirmComponent},
 {path: "profile", component: PersonalAreaComponent},
 {path: "users", component: SearchUsersComponent},
 {path: "chats", component: ChatsComponent},
 {path: "offers", component: OffersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
