import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopOverComponent } from 'src/app/global/components/pop-over/pop-over.component';
import { ClientFormService } from '../../services/client-form.service';
import { ClientApi } from '../../api/client.api';
import { ClientService } from '../../services/client.service';
import { map } from 'rxjs';

@Component({
  templateUrl: './client-root.component.html',
})
export class ClientRootComponent implements OnInit {
  constructor(
    private popoverController: PopoverController,
    private clientFormService: ClientFormService,
    private clientApi: ClientApi,
    public clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientService.clients$ = this.clientApi
      .getClients()
      .pipe(map((response) => response.result));
  }

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
