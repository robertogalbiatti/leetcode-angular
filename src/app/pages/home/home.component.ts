import { Component } from '@angular/core';
import { problems } from 'src/app/data/problems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  problems = problems;
}
