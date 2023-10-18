import { Header } from "@/widgets/header";
import { RoomsFilter } from "@/widgets/rooms-filter";
import { RoomsList } from "@/widgets/rooms-list";

export const Main = () => {
    return (
      <>
        <Header />
        <RoomsFilter />
        <RoomsList />
      </>
    );
};