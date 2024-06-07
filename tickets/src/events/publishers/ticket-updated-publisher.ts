import { Publisher, Subjects, TicketUpdatedEvent } from "@gagickkk/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
