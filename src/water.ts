import { IInputFood } from "./IInputFood";

export class Water implements IInputFood {
  food: string = 'Água'
  quantity: string

  constructor(man: number, woman: number, child:number) {
    this.quantity = this.calculateQuantity(man, woman, child)
  }

  calculateQuantity(man: number, woman: number, child:number) {
    const qtTotal = man + woman + child
    const qtWater = Math.ceil(qtTotal/5)
    return `${qtWater} unidades de 1L`
  }
}