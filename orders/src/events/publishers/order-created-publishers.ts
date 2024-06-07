import { Publisher, OrderCreatedEvent, Subjects } from "@gagickkk/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}