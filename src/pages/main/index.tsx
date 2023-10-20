import { Header } from "@/widgets/header";
import { RoomsFilter } from "@/widgets/rooms-filter";
import { RoomsList } from "@/widgets/rooms-list";
import PageLayout from "@/shared/ui/page-layout/pageLayout";
import SideLayout from "@/shared/ui/side-layout/sideLayout";

export const Main = () => {
    return (
      <PageLayout
        head={<Header />}>
        <SideLayout>
          <RoomsFilter />
          <RoomsList />
        </SideLayout>
      </PageLayout>
    );
};