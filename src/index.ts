import App from './pages/app'; // Читает не доходя до index.ts
import './style.css';
import data from './assets/data'
import ToyseContainer from './pages/toys/card';
const newData: any = data;
console.log(newData)

//////////////////////////////////////
const app = new App();
app.run();
//////////////////////////////////////


const fff = new ToyseContainer('12', '12');



function filter(category: string, newData: any, data: any) {
    newData = data.filter((item: any) => {
        return item.color === category;
    })

    console.log(newData)
    return fff.renderToyElement(newData);
}



function button() {
    const button = document.querySelectorAll('.button-color');
    button.forEach(el => {
        el.addEventListener('click', (el) => {
            const element = el.target as HTMLButtonElement;
            const dataFilter = element.dataset.filter as string;
            // console.log(dataFilter);
            filter(dataFilter, newData, data)
        })
    })
}
button();


export default newData; 