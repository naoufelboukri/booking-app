'use client';

import { Prestation } from "@/app/lib/definitions";
import PrestationSelection from "./PrestationSelection";

const BookingSection: React.FC<{
    prestations: Prestation[],
}> = ({prestations}) => {
    return (
        <div className={'space-y-12'}>
            <PrestationSelection prestations={prestations}/>
        </div>
    )
}

export default BookingSection;