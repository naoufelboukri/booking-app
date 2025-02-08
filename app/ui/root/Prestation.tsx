import {clsx} from "clsx";
import { Prestation } from "@/app/lib/definitions";
import {useAppDispatch, useAppSelector} from "@/lib/hooks";

const PrestationSelect: React.FC<{prestation: Prestation}> = ({prestation}) => {
    const dispatch = useAppDispatch();
    const { selectedPrestations } = useAppSelector((state) => state.handleAppointment);
    return (
        <div className={'flex flex-col md:flex-row justify-between items-start md:gap-5 py-4 relative bg-white px-2 rounded'}>
            <div className={`flex flex-col flex-1 gap-1 max-w-4xl`}>
                <h6 className={'font-normal'}>{prestation.name}</h6>
                <span>{prestation.duration}</span>
                <span>{prestation.price}</span>
                <button className={clsx('bg-black text-white p-2 rounded min-w-32', {'bg-gray-500': selectedPrestations.some((item) => item.id === prestation.id)})} onClick={selectPrestationHandler}>
                    {!selectedPrestations.some((item) => item.id === prestation.id) ? 'Sélectionner' : 'Sélectionné'}
                </button>
            </div>
        </div>
    )
}

export default PrestationSelect;