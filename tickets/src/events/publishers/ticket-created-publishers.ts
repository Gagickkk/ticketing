import { Publisher, Subjects, TicketCreatedEvent } from "@gagickkk/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated
}
