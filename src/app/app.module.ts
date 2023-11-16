import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginModule } from './features/login/login.module';
import { SignupModule } from './features/signup/signup.module';
import { StartModule } from './features/start/start.module';
import { LayoutModule } from './features/layout/layout.module';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    LoginModule,
    SignupModule,
    StartModule,
    RouterModule.forRoot([
      {
        path: 'login',
        loadChildren: () =>
          import('./features/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'criar-conta',
        loadChildren: () =>
          import('./features/signup/signup.module').then((m) => m.SignupModule),
      },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./features/start/start.module').then((m) => m.StartModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./features/layout/layout-routing.module').then(
            (m) => m.LayoutRoutingModule
          ),
      },
    ]),
    LayoutModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
