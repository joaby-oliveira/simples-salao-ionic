import { NgModule } from '@angular/core';
import { ClientRootComponent } from './containers/client-root/client-root.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ClientFormComponent } from './containers/client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientFormService } from './services/client-form.service';
import { ClientApi } from './api/client.api';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: ClientRootComponent }];

@NgModule({
  declarations: [ClientRootComponent, ClientFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ClientFormService, ClientApi, ClientService],
})
export class ClientModule {}
