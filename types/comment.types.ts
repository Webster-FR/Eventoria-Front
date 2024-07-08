export interface IComment {
  id: number;
  senderId: number;
  replyTo: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
