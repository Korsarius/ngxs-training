import { IAnimal, IAnimalAdd } from './animal.interface';

export interface IZooStateModel {
  animals: IAnimal[];
  addAnimal: IAnimalAdd[];
}
