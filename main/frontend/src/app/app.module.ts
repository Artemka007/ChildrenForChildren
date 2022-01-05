import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HeadComponent } from './ui/head/head.component';
import { reducers } from './business';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetPasswordConfirmComponent } from './auth/reset-password-confirm/reset-password-confirm.component';
import { AccountNavComponent } from './auth/account-nav/account-nav.component';
import { PersonalAreaComponent } from './auth/personal-area/personal-area.component';
import { ChatsComponent } from './chats/chats.component';
import { Subject } from 'rxjs';
import { ChatMessageComponent } from './chats/chat-message/chat-message.component';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';
import { ImageSliderComponent } from './ui/image-slider/image-slider.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { HamburgerComponent } from './ui/hamburger/hamburger.component';
import { OffersComponent } from './offers/offers.component';
import { OfferComponent } from './offers/offer/offer.component';
import { WarningWindowComponent } from './ui/warning-window/warning-window.component';
import { OfferActionComponent } from './offers/offer-action/offer-action.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { ChatUploadFilesComponent } from './chats/chat-upload-files/chat-upload-files.component';
import { ChatCreateComponent } from './chats/chat-create/chat-create.component';
import { NewsComponent } from './news/news.component';
import { CropImageComponent } from './ui/crop-image/crop-image.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { NewComponent } from './news/new/new.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { ReportComponent } from './auth/report/report.component';
import { QuestionComponent } from './ui/question/question.component';

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
    ChatsComponent,
    ChatMessageComponent,
    ProgressBarComponent,
    ImageSliderComponent,
    SearchUsersComponent,
    HamburgerComponent,
    OffersComponent,
    OfferComponent,
    WarningWindowComponent,
    OfferActionComponent,
    OfferDetailComponent,
    ChatUploadFilesComponent,
    ChatCreateComponent,
    NewsComponent,
    CropImageComponent,
    DateAgoPipe,
    NewComponent,
    SafeHtmlPipe,
    ReportComponent,
    QuestionComponent
  ],
  imports: [
    ImageCropperModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    Subject
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
