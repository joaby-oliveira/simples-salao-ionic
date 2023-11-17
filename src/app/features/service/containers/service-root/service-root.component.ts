import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverComponent } from 'src/app/global/components/pop-over/pop-over.component';
import { ServiceFormService } from '../../services/service-form.service';

@Component({
  templateUrl: './service-root.component.html',
})
export class ServiceRootComponent {
  constructor(
    private popoverController: PopoverController,
    private serviceFormService: ServiceFormService
  ) {}

  async presentPopover(ev: any, idService: string) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        handleUpdate: this.updateService(idService),
        handleDelete: this.deleteService(idService),
      },
    });
    return await popover.present();
  }
  services = [
    {
      idService: 'uuid1',
      name: 'Service 1',
      price: 100,
    },
    {
      idService: 'uuid2',
      name: 'Service 2',
      price: 200,
    },
    {
      idService: 'uuid3',
      name: 'Service 3',
      price: 300,
    },
  ];
  updateService(idService: string) {
    return () => {
      console.log('update service', idService);
    };
  }

  deleteService(idService: string) {
    return () => {
      console.log('delete service', idService);
    };
  }

  openServiceForm() {
    this.serviceFormService.isOpen.next(true);
  }
}
