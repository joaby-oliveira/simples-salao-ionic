import { Client } from '../../client/interfaces/Client';
import { Service } from '../../service/interfaces/Service';

export interface Appointment {
  idAppointment: string;
  startTime: Date;
  endTime: Date;
  approved: boolean;
  idProfessional: string;
  idClient: string;
  idService: string;
  service: Service;
  client: Client;
}
