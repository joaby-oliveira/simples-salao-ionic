import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfessionalFormService } from '../../services/professional-form.service';
import { PopOverComponent } from 'src/app/global/components/pop-over/pop-over.component';
import { PopoverController } from '@ionic/angular';
import { ProfessionalApi } from '../../api/professional.api';
import { ProfessionalService } from '../../services/professional.service';
import { map } from 'rxjs';

@Component({
  templateUrl: 'professional-root.component.html',
})
export class ProfessionalRootComponent implements OnInit {
  constructor(
    private professionalFormService: ProfessionalFormService,
    private popoverController: PopoverController,
    private professionalApi: ProfessionalApi,
    public professionalService: ProfessionalService
  ) {}

  ngOnInit(): void {
    this.professionalService.professionals$ = this.professionalApi
      .getProfessionals()
      .pipe(map((response) => response.result));
  }

  async presentPopover(ev: any, idProfessional: string) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        handleUpdate: this.updateProfessional(idProfessional),
        handleDelete: this.deleteProfessional(idProfessional),
      },
    });
    return await popover.present();
  }

  updateProfessional(idProfessional: string) {
    return () => {
      console.log('update professional', idProfessional);
    };
  }

  deleteProfessional(idProfessional: string) {
    return () => {
      console.log('delete professional', idProfessional);
    };
  }

  openProfessionalForm() {
    this.professionalFormService.isOpen.next(true);
  }
}
