import kraan from '../../assets/kraan.svg'
import gereedschap from '../../assets/Tools.svg'
import gasleiding from '../../assets/Gasleiding.svg'
import lekkage from '../../assets/Lekkage.svg'
import riolering from '../../assets/Onstoppen.svg'
import anders from '../../assets/Group 234.svg'
import { useState } from 'react'

export function CategoryForm() {

    const repairCategories = [
        {
            id: 1,
            icon: kraan,
            title: "Nieuwe leiding aanleggen",
            category: "pipe replacement",
            defaultChecked: false,
        },
        {
            id: 2,
            icon: gereedschap,
            title: "Kapotte leiding maken",
            category: "damaged pipes",
            defaultChecked: false,
        },
        {
            id: 3,
            icon: gasleiding,
            title: "Gasleiding repareren",
            category: "gas pipe repair",
            defaultChecked: false,
        },
        {
            id: 4,
            icon: lekkage,
            title: "Lekkage verhelpen",
            category: "leakage",
            defaultChecked: false,
        },
        {
            id: 5,
            icon: riolering,
            title: "Riolering en afvoer onstoppen of reinigen",
            category: "sewage system",
            defaultChecked: false,
        },
        {
            id: 6,
            icon: anders,
            title: "Anders",
            category: "other",
            defaultChecked: true,
        },
    ]

    const [isCheckedList, setIsCheckedList] = useState(repairCategories.map(() => false));

    const handleDivClicked = (index: number) => {
        const updatedIsCheckedList = [...isCheckedList];
        updatedIsCheckedList[index] = !updatedIsCheckedList[index];
        setIsCheckedList(updatedIsCheckedList);
    };

    let repairCardsToBeRendered = repairCategories.map((Repaircard, index) => {
        if (Repaircard.defaultChecked = false) {
            return (
                <div key={Repaircard.id} className='repairCard' onClick={() => handleDivClicked(index)}>
                    <input type="checkbox" name={Repaircard.title} value={Repaircard.category} checked={isCheckedList[index]} />
                    <img className='icon' src={Repaircard.icon} alt={Repaircard.category} />
                    <label>{Repaircard.title}</label>
                </div>
            )
        } else {
            return (
                <div key={Repaircard.id} className='repairCard' onClick={() => handleDivClicked(index)}>
                    <input type="checkbox" name={Repaircard.title} value={Repaircard.category} checked={true} />
                    <img className='icon' src={Repaircard.icon} alt={Repaircard.category} />
                    <label>{Repaircard.title}</label>
                </div>
            );

        }
    });

    return (
        <>
            <div className='repaircards-con'>
                {repairCardsToBeRendered}
            </div>
        </>
    )
}