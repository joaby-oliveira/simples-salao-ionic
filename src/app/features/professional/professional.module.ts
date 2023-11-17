import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfessionalRootComponent } from './containers/professional-root.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfessionalFormService } from './services/professional-form.service';

const routes: Routes = [{ path: '', component: ProfessionalRootComponent }];

@NgModule({
  declarations: [ProfessionalRootComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  providers: [ProfessionalFormService],
})
export class ProfessionalModule {}
