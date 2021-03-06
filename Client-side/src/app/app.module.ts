import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { EditAccountComponent } from './pages/edit-account/edit-account.component';
import { AddAccountComponent } from './pages/add-account/add-account.component';
import { AccountDetailsComponent } from './pages/account-details/account-details.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    data: { title: 'Accounts' }
  },
  {
    path: 'add-account',
    component: AddAccountComponent,
    data: { title: 'Create Account' }
  },
  {
    path: 'account-details/:id',
    component: AccountDetailsComponent,
    data: { title: 'Account Details' }
  },
  {
    path: 'edit-account/:id',
    component: EditAccountComponent,
    data: { title: 'Edit Account' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AccountsComponent,
    EditAccountComponent,
    AddAccountComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
