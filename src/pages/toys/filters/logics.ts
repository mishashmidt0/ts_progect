import Filters from ".";
import data from '../../../assets/data'
import ToyseContainer, { Bell } from "../card";
import Toyse from "..";

class CreateFilter {
    protected static newData = data;
    protected toyseContainer: ToyseContainer;
    constructor() {
        this.toyseContainer = new ToyseContainer('12', '12');
    }


    filter(category: string, newData: any, data: any) {
        newData = data.filter((item: any) => {
            return item.color === category;
        })

        return this.hiddenCard(newData)

    }

    button() {
        const button = document.querySelectorAll('.button-color');

        button.forEach(el => {
            el.addEventListener('click', (el) => {
                const element = el.target as HTMLButtonElement;
                const dataFilter = element.dataset.filter as string;

                return this.filter(dataFilter, CreateFilter.newData, data)
            })
        })

    }

    hiddenCard(array: Array<Bell>) {
        // ==================

        const selectedColors: string[] = [];
        selectedColors.push('red');
        this.toyseContainer.renderToyElement(array, item => (!selectedColors.length || selectedColors.includes(item.color)) && selectedShapes.includes(item.shape) && (item.year < 1999 && 2010 > item.year))
        //==================
        const container = document.querySelector('.card-container')
        const card = document.querySelectorAll('.card');


        card.forEach((el) => {
            el.remove()
        });
        return this.toyseContainer.renderToyElement(array, () => true);
    }
}



export default CreateFilter; 