import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { ImageCropperModule } from 'ngx-image-cropper';
import { Subject } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountNavComponent } from './auth/account-nav/account-nav.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { PersonalAreaComponent } from './auth/personal-area/personal-area.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReportComponent } from './auth/report/report.component';
import { ResetPasswordConfirmComponent } from './auth/reset-password-confirm/reset-password-confirm.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { reducers } from './business';
import { ChatBodyComponent } from './chat/chat-body/chat-body.component';
import { ChatInfoComponent } from './chat/chat-info/chat-info.component';
import { ChatMessageComponent } from './chat/chat-message/chat-message.component';
import { ChatUploaderComponent } from './chat/chat-uploader/chat-uploader.component';
import { ChatComponent } from './chat/chat.component';
import { CreateChatFormComponent } from './chat/create-chat-form/create-chat-form.component';
import { MessageComponent } from './chat/message/message.component';
import { ChatCreateComponent } from './chats/chat-create/chat-create.component';
import { ChatsNavigationComponent } from './chats/chats-navigation/chats-navigation.component';
import { ChatsComponent } from './chats/chats.component';
import { AutogrowDirective } from './directives/autogrow.directive';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './news/new/new.component';
import { NewsComponent } from './news/news.component';
import { OfferActionComponent } from './offers/offer-action/offer-action.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { OfferComponent } from './offers/offer/offer.component';
import { OffersComponent } from './offers/offers.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SearchUsersComponent } from './search-users/search-users.component';
import { CropImageComponent } from './ui/crop-image/crop-image.component';
import { HamburgerComponent } from './ui/hamburger/hamburger.component';
import { HeadComponent } from './ui/head/head.component';
import { ImageSliderComponent } from './ui/image-slider/image-slider.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';
import { QuestionComponent } from './ui/question/question.component';
import { WarningWindowComponent } from './ui/warning-window/warning-window.component';
import { LoaderComponent } from './ui/loader/loader.component';


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
    ChatCreateComponent,
    NewsComponent,
    CropImageComponent,
    DateAgoPipe,
    NewComponent,
    SafeHtmlPipe,
    ReportComponent,
    QuestionComponent,
    ChatsNavigationComponent,
    ChatComponent,
    CreateChatFormComponent,
    MessageComponent,
    ChatUploaderComponent,
    ChatBodyComponent,
    ChatInfoComponent,
    AutogrowDirective,
    LoaderComponent
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
