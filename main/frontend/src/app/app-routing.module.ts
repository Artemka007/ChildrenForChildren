import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PersonalAreaComponent } from './auth/personal-area/personal-area.component';
import { RegisterComponent } from './auth/register/register.component';
import { ResetPasswordConfirmComponent } from './auth/reset-password-confirm/reset-password-confirm.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ChatsComponent } from './chats/chats.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { OffersComponent } from './offers/offers.component';
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
 {path: "chats/:id", component: ChatsComponent},
 {path: "news", component: NewsComponent},
 {path: "offers", component: OffersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
