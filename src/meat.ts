import { IInputFood } from "./IInputFood";

export class Meat implements IInputFood {
  food: string = 'Carne'
  quantity: string

  constructor(man: number, woman: number, child:number) {
    this.quantity = this.calculateQuantity(man, woman, child)
  }

  calculateQuantity(man: number, woman: number, child:number) {
    const qtMan = man * 0.4;
    const qtWoman = woman * 0.32;
    const qtChild = child * 0.2;

    return `${(qtMan + qtWoman + qtChild).toFixed(2)} Kg`
  }
}