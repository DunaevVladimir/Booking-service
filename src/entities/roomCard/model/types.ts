export interface Room {
  roomCard: {
    title: string;
    area: number;
    price: number;
    adress: string;
    description: string;
    type: 'hotel' | 'apartment' | 'room'
  }
}