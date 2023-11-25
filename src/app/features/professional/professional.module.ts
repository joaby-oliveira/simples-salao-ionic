import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfessionalRootComponent } from './containers/professional-root/professional-root.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionalFormService } from './services/professional-form.service';
import { ProfessionalFormComponent } from './containers/professional-form/professional-form.component';
import { ProfessionalApi } from './api/professional.api';
import { HttpClientModule } from '@angular/common/http';
import { ProfessionalService } from './services/professional.service';

const routes: Routes = [{ path: '', component: ProfessionalRootComponent }];

@NgModule({
  declarations: [ProfessionalRootComponent, ProfessionalFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ProfessionalFormService, ProfessionalApi, ProfessionalService],
})
export class ProfessionalModule {}
