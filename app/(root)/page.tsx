import StoreProvider from "@/app/StoreProvider";
import BookingSection from "../ui/root/BookingSection";
import { mock_prestations } from "../lib/placeholder-data";

export default function Home() {
  return (
    <div className='bg-slate-50'>
      <section className={'w-10/12 mx-auto py-12 flex flex-col gap-8'}>
                <h2 className={'text-3xl font-black'}>Company</h2>

                <h3 className={'text-2xl font-bold uppercase'}>Make an appointment</h3>

                <StoreProvider>
                  <BookingSection prestations={mock_prestations}/>
                </StoreProvider>

            </section>
    </div>
  );
}
