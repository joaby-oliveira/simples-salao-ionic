import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverComponent } from 'src/app/global/components/pop-over/pop-over.component';
import { ClientFormService } from '../../services/client-form.service';

@Component({
  templateUrl: './client-root.component.html',
})
export class ClientRootComponent {
  constructor(
    private popoverController: PopoverController,
    private clientFormService: ClientFormService
  ) {}

  async presentPopover(ev: any, idClient: string) {
    const popover = await this.popoverController.create({
      component: PopOverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        handleUpdate: this.updateClient(idClient),
        handleDelete: this.deleteClient(idClient),
      },
    });
    return await popover.present();
  }
  clients = [
    {
      idClient: 'uuid1',
      name: 'Client 1',
      price: 100,
    },
    {
      idClient: 'uuid2',
      name: 'Client 2',
      price: 200,
    },
    {
      idClient: 'uuid3',
      name: 'Client 3',
      price: 300,
    },
  ];
  updateClient(idClient: string) {
    return () => {
      console.log('update client', idClient);
    };
  }

  deleteClient(idClient: string) {
    return () => {
      console.log('delete client', idClient);
    };
  }

  openClientForm() {
    this.clientFormService.isOpen.next(true);
  }
}
