import { State } from '@ngxs/store';

import { IZooStateModel } from '../interfaces/zoo-state-model.interface';

@State<IZooStateModel>({
  name: 'Zoo',
  defaults: {
    animals: [],
    addAnimal: []
  }
})
export class ZooState {}
