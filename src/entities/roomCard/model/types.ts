export interface RoomCardProps {
  roomCard: {
    title: string;
    price: number;
    area: number;
    adress: string;
    description: string;
    type: 'hotel' | 'apartment' | 'room'
  }
}