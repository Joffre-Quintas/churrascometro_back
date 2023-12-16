import { IInputFood } from "./IInputFood";

export class Beer implements IInputFood {
  food: string = 'Cerveja'
  quantity: string

  constructor(man: number, woman: number, child:number) {
    this.quantity = this.calculateQuantity(man, woman, child)
  }

  calculateQuantity(man: number, woman: number, child:number) {
    const qtTotal = man + woman
    const qtBeer = qtTotal*3
    return `${qtBeer} garrafas de 600ml`
  }
}