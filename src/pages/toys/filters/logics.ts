import { Toy } from './../../../typings/Toy';
import Filters from ".";
import data from '../../../assets/data'
import ToyseContainer from "../card";
import Toyse from "..";
import { Shape, Size, Color } from "../../../typings/Toy";

type TypeforR = {
    selectedShape: Array<string>,
    selectedColors: Array<string>,
    selectedSize: Array<string>,
    selectedFavorite: Array<boolean>,
    selectedYear: Array<string>,
    selectedCount: Array<string>,
}
const selectedFiltersOfToys: TypeforR = {
    selectedShape: ['шар', 'фигурка', 'колокольчик', 'шишка', 'снежинка'],
    selectedColors: ['зеленый'],
    selectedSize: ['большой', 'средний', 'малый'],
    selectedFavorite: [true],
    selectedYear: [],
    selectedCount: [],
}



class CreateFilter {
    protected static newData = data;
    protected toyseContainer: ToyseContainer;
    constructor() {
        this.toyseContainer = new ToyseContainer('12', '12');
    }

    getElemetsForFilters() {

        const buttonShape = document.querySelectorAll('.button-shape');
        const buttonColor = document.querySelectorAll('.button-color');
        const buttonSize = document.querySelectorAll('.button-size');
        const buttonFavorits = document.querySelectorAll('.button-likes');

        function addElement(element: any, selectedArray: Array<string | boolean>) {
            element.forEach((el: HTMLElement) => {
                el.addEventListener('click', (el) => {
                    const element = el.target as HTMLButtonElement;
                    const dataFilter = element.dataset.filter as string;
                    if (selectedArray.includes(dataFilter)) {
                        selectedArray.splice(selectedArray.indexOf(dataFilter), 1)
                    } else (selectedArray.push(dataFilter))

                })
            })
        }
        addElement(buttonShape, selectedFiltersOfToys.selectedShape)
        addElement(buttonColor, selectedFiltersOfToys.selectedColors)
        addElement(buttonSize, selectedFiltersOfToys.selectedSize)
        addElement(buttonFavorits, selectedFiltersOfToys.selectedFavorite)
        console.log(CreateFilter.newData)

        return this.toyseContainer.renderToyElement(CreateFilter.newData, (item: Toy) => {
            return item.shape === Shape.Snowflake
            return (!selectedFiltersOfToys.selectedShape.length || selectedFiltersOfToys.selectedShape.includes(item.shape)) &&
                (!selectedFiltersOfToys.selectedColors.length || selectedFiltersOfToys.selectedColors.includes(item.color)) &&
                (!selectedFiltersOfToys.selectedSize.length || selectedFiltersOfToys.selectedSize.includes(item.size))
        }
        )
    }

    filter(category: string, newData: any, data: any) {
        newData = data.filter((item: any) => {
            return item.color === category;
        })
        return this.hiddenCard(newData)
    }



    hiddenCard(array: Array<Toy>) {


        // ==================
        // const selectedColors: string[] = [];
        // selectedColors.push('red');
        // this.toyseContainer.renderToyElement(array, item => (!selectedColors.length || selectedColors.includes(item.color)) && selectedShapes.includes(item.shape) && (item.year < 1999 && 2010 > item.year))
        //==================




        console.log("Jobs")
        return this.toyseContainer.renderToyElement(array, (item) => item.shape === Shape.Ball);
    }
}

export default CreateFilter;



export function getElemetsForFilters(item: Toy): boolean {

    const buttonShape = document.querySelectorAll('.button-shape');
    const buttonColor = document.querySelectorAll('.button-color');
    const buttonSize = document.querySelectorAll('.button-size');
    const buttonFavorits = document.querySelectorAll('.button-likes');

    function addElement(element: any, selectedArray: Array<string | boolean>) {
        element.forEach((el: HTMLElement) => {
            el.addEventListener('click', (el) => {
                const element = el.target as HTMLButtonElement;
                const dataFilter = element.dataset.filter as string;
                if (selectedArray.includes(dataFilter)) {
                    selectedArray.splice(selectedArray.indexOf(dataFilter), 1)
                } else (selectedArray.push(dataFilter))
                console.log(selectedArray)
            })
        })
    }
    addElement(buttonShape, selectedFiltersOfToys.selectedShape)
    addElement(buttonColor, selectedFiltersOfToys.selectedColors)
    addElement(buttonSize, selectedFiltersOfToys.selectedSize)
    addElement(buttonFavorits, selectedFiltersOfToys.selectedFavorite)
    console.log()
    return item.shape === Shape.Ball
    // (!selectedFiltersOfToys.selectedShape.length || selectedFiltersOfToys.selectedShape.includes(item.shape)) &&
    //     (!selectedFiltersOfToys.selectedColors.length || selectedFiltersOfToys.selectedColors.includes(item.color)) &&
    //     (!selectedFiltersOfToys.selectedSize.length || selectedFiltersOfToys.selectedSize.includes(item.size))
}