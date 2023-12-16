import { IInputFood } from "./IInputFood";

export class Ice implements IInputFood {
  food: string = 'Gelo'
  quantity: string

  constructor( man: number, woman: number, child:number) {
    this.quantity = this.calculateQuantity(man, woman, child)
  }

  calculateQuantity(man: number, woman: number, child:number) {
    const qtTotal = man + woman + child
    const qtIce = Math.ceil(qtTotal/10)*5
    return `${qtIce} Kg`
  }
}