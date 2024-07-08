export type EventCategory = "culinary" | "dance" | "geek" | "shoot" | "sport" | "cinema";

export interface IEvent {
  ulid: string;
  category: EventCategory;
  place: string;
  participationMandatory: boolean;
  name: string;
  description: string;
  tags: string | string[];
  hidden: boolean;
  thumbnail?: string;

  createdAt: Date;
  updatedAt: Date;
  startsAt: Date;
  endsAt: Date;
  cancelledAt?: Date;
}
