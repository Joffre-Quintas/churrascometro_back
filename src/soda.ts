import { IInputFood } from "./IInputFood";

export class Soda implements IInputFood {
  food: string = 'Refrigerante'
  quantity: string

  constructor(man: number, woman: number, child:number) {
    this.quantity = this.calculateQuantity(man, woman, child)
  }

  calculateQuantity(man: number, woman: number, child:number) {
    const qtTotal = man + woman + child
    const qtSoda = Math.ceil(qtTotal/5)
    return `${qtSoda} unidades de 2L`
  }
}