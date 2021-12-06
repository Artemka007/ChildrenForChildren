import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadComponent } from './head/head.component';
import { reducers } from './business';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordConfirmComponent } from './reset-password-confirm/reset-password-confirm.component';
import { AccountNavComponent } from './account-nav/account-nav.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { FormSwitcherComponent } from './form-switcher/form-switcher.component';
import { ChatsComponent } from './chats/chats.component';
import { Subject } from 'rxjs';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { OffersComponent } from './offers/offers.component';
import { OfferComponent } from './offer/offer.component';
import { DialogWindowComponent } from './dialog-window/dialog-window.component';
import { WarningWindowComponent } from './warning-window/warning-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeadComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ResetPasswordComponent,
    ResetPasswordConfirmComponent,
    AccountNavComponent,
    PersonalAreaComponent,
    FormSwitcherComponent,
    ChatsComponent,
    ChatMessageComponent,
    ProgressBarComponent,
    ImageSliderComponent,
    SearchUsersComponent,
    HamburgerComponent,
    OffersComponent,
    OfferComponent,
    DialogWindowComponent,
    WarningWindowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    Subject
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
