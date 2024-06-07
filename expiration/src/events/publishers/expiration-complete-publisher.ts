import { Subjects, Publisher, ExpirationComplete } from "@gagickkk/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationComplete> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}