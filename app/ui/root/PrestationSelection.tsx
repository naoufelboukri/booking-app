import { Prestation } from "@/app/lib/definitions"
import { Button } from "../button";
import PrestationSelect from "./Prestation";

const PrestationSelection: React.FC<{
    prestations: Prestation[],
}> = ({prestations}) => {
    return (
        <section>
            <h4 className={'text-2xl font-semibold uppercase '}><span className={'text-blue-600'}>1. </span>Choix de la prestation</h4>
            <div className={'flex flex-col gap-1 bg-whute p-4'}>
                <h5 className={'font-semibold text-xl'}>Category name</h5>
                <div className={'py-4 px-0'}>
                    <div className={'relative flex flex-col'}>
                        {prestations.map((prestation: Prestation) => <PrestationSelect prestation={prestation}/>)}
                    </div>
                </div>
            </div>
            <Button className={'bg-black text-white float-end'}>Confirmer la sélection</Button>
        </section>
    )
}

export default PrestationSelection;