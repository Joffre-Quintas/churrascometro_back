export interface IInputFood {
  food: string
  quantity: string

  calculateQuantity(man: number, woman: number, child:number): string
}