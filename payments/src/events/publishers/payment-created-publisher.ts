import { Subjects, Publisher, PaymentCreatedEvent } from "@gagickkk/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}