export type Toy = {
    num: string, //number
    name: string,
    count: string, //number
    year: string,   //number
    shape: string,
    color: string,
    size: string,
    favorite: boolean,
}

export enum Shape {
    Ball = 'шар',
    Figurine = 'фигурка',
    Bell = 'колокольчик',
    Cone = 'шишка',
    Snowflake = 'снежинка',
}
export enum Size {
    Big = 'большой',
    Average = 'средний',
    Small = 'малый',
}
export enum Color {
    White = 'белый',
    Yellow = 'желтый',
    Red = 'красный',
    Blue = 'синий',
    Green = 'зеленый',
}
