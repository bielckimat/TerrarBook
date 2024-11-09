import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { AnimalFormComponent } from './animal/animal-form/animal-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AnimalComponent,AnimalFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terraBook-front';
}
