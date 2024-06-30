import { Store } from '@ngxs/store';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { GetAnimal } from '../../store/animal.actions';

@Component({
  selector: 'app-zoo-cmp',
  standalone: true,
  templateUrl: './zoo.component.html',
  styleUrls: [ './zoo.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ZooComponent implements OnInit {

  ngOnInit(): void {
    this.getAnimal();
  }

  constructor(private store: Store) {}

  getAnimal(): void {
    this.store.dispatch(new GetAnimal());
  }
}
