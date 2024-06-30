import { Component } from '@angular/core';

import { ZooComponent } from './components/zoo/zoo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    ZooComponent,
    RouterModule
  ]
})
export class AppComponent {
  title = 'ngxs-app';
}
