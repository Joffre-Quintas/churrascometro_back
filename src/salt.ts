import { IInputFood } from "./IInputFood";

export class Salt implements IInputFood {
  food: string = 'Sal'
  quantity: string

  constructor(man: number, woman: number, child:number) {
    this.quantity = this.calculateQuantity(man, woman, child)
  }

  calculateQuantity(man: number, woman: number, child:number) {
    return `${(man + woman + child)*0.04} Kg`
  }
}