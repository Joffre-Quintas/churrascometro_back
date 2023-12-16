import { IInputFood } from "./IInputFood";

export class Coal implements IInputFood {
  food: string = "Carvão"
  quantity: string

  constructor(man: number, woman: number, child:number) {
    this.quantity = this.calculateQuantity(man, woman, child)
  }

  calculateQuantity(man: number, woman: number, child:number) {
    return `${man + woman + child} Kg`
  }
}