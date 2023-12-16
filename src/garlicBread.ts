import { IInputFood } from "./IInputFood";

export class GarlicBread implements IInputFood {
  food: string = 'Pão de alho'
  quantity: string

  constructor(man: number, woman: number, child:number) {
    this.quantity = this.calculateQuantity(man, woman, child)
  }

  calculateQuantity(man: number, woman: number, child:number) {
    const qtMan = man * 2;
    const qtWoman = woman * 2;
    const qtChild = child * 1;

    return `${qtMan + qtWoman + qtChild} Unidades`
  }
}