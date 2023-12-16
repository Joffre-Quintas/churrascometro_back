import { Injectable } from '@nestjs/common';
import { Meat } from './meat';
import { Coal } from './coal';
import { GarlicBread } from './garlicBread';
import { Salt } from './salt';
import { Ice } from './ice';
import { Soda } from './soda';
import { Water } from './water';
import { Beer } from './beer';

@Injectable()
export class AppService {
  calculateInputFood(homem: number, mulher: number, crianca: number): Array<Object> {

    return [
      new Meat(homem, mulher, crianca), 
      new GarlicBread(homem, mulher, crianca), 
      new Coal(homem, mulher, crianca), 
      new Ice(homem, mulher, crianca), 
      new Salt(homem, mulher, crianca), 
      new Soda(homem, mulher, crianca), 
      new Water(homem, mulher, crianca),
      new Beer(homem, mulher, crianca)
    ];
  }
}
