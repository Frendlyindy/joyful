import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { InfoComponent } from './info/info.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule } from '@angular/common/http';
import { LogginComponent } from './loggin/loggin.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToolsComponent,
    InfoComponent,
    LifestyleComponent,
    ErrorPageComponent,
    LogginComponent,
    SignUpComponent,
    EditUserComponent,
    DeleteUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'tools', component: ToolsComponent },
      { path: 'info', component: InfoComponent },
      { path: 'lifestyle', component: LifestyleComponent },
      { path: 'loggin', component: LogginComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'edit-user', component: EditUserComponent },
      { path: 'delete-user', component: DeleteUserComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', component: ErrorPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
