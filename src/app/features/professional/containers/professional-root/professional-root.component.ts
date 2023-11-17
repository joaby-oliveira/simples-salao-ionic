import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfessionalFormService } from '../../services/professional-form.service';
import { PopOverComponent } from 'src/app/global/components/pop-over/pop-over.component';
import { PopoverController } from '@ionic/angular';

@Component({
  templateUrl: 'professional-root.component.html',
})
export class ProfessionalRootComponent {
  constructor(
    private formBuilder: FormBuilder,
    private professionalFormService: ProfessionalFormService,
    private popoverController: PopoverController
  ) {}

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

  professionalForm = this.formBuilder.group({});
  professionals = [
    {
      idProfessional: 'uuid1',
      name: 'Professional 1',
    },
    {
      idProfessional: 'uuid2',
      name: 'Professional 2',
    },
    {
      idProfessional: 'uuid3',
      name: 'Professional 3',
    },
  ];
  openProfessionalForm() {
    this.professionalFormService.isOpen.next(true);
  }
}
