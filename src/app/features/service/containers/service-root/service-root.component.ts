import { Component, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { PopOverComponent } from 'src/app/global/components/pop-over/pop-over.component';
import { ServiceFormService } from '../../services/service-form.service';
import { ServiceApi } from '../../api/service.api';
import { map } from 'rxjs';
import { ServiceService } from '../../services/service.service';

@Component({
  templateUrl: './service-root.component.html',
})
export class ServiceRootComponent implements OnInit {
  constructor(
    private popoverController: PopoverController,
    private serviceFormService: ServiceFormService,
    private serviceApi: ServiceApi,
    private toastController: ToastController,
    public serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.serviceService.services$ = this.serviceApi
      .getServices()
      .pipe(map((response) => response.result));
  }

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

  updateService(idService: string) {
    return () => {
      console.log('update service', idService);
    };
  }

  deleteService(idService: string) {
    return () => {
      this.serviceApi.deleteService(idService).subscribe({
        next: () => {
          this.serviceService.services$ = this.serviceApi
            .getServices()
            .pipe(map((response) => response.result));
        },
        error: async (error) => {
          const toast = await this.toastController.create({
            message: 'Não foi possível excluir o serviço' + error.error.message,
            duration: 2000,
            position: 'top',
            color: 'danger',
          });

          await toast.present();
        },
        complete: () => {
          this.popoverController.dismiss();
        }
      });
    };
  }

  openServiceForm() {
    this.serviceFormService.isOpen.next(true);
  }
}
