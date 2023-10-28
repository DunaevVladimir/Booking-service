import { Header } from "@/widgets/header";
import { RoomsFilter } from "@/widgets/rooms-filter";
import { RoomsList } from "@/widgets/rooms-list";
import PageLayout from "@/shared/ui/page-layout/pageLayout";

export const Main = () => {
    return (
      <PageLayout
        head={<Header />}>
        <RoomsFilter />
        <RoomsList />
      </PageLayout>
    );
};