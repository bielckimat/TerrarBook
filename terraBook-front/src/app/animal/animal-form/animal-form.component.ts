import { Component } from '@angular/core';
import { AnimalsService } from '../../animals.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-animal-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './animal-form.component.html',
  styleUrl: './animal-form.component.css'
})
export class AnimalFormComponent {
  constructor(private animalsService: AnimalsService, private router: Router) {}
  animal = { name: '', type: '' };

  onSubmit(): void {
    this.animalsService.addAnimal(this.animal).subscribe(() => {
      this.router.navigate(['/animals']); 
    });

}

}
