export enum Shape {
    Ball = 'шар',
    Figurine = 'фигурка',
    Bell = 'колокольчик',
    Cone = 'шишка',
    Snowflake = 'снежинка',
}
const a: Toy = {
    shape: 'шар' as Shape
}
// add enum -size -color
export type Toy = {
    num: string, //number
    name: string,
    count: string, //number
    year: string,   //number
    shape: Shape,
    color: string,
    size: string,
    favorite: boolean,
}