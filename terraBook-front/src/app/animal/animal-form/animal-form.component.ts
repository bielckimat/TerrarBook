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

  selectedFile: File | null = null;

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
  
  onSubmit(): void {

    if (!this.selectedFile) {
      alert('Proszę wybrać plik!');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.animal.name);
    formData.append('type', this.animal.type);
    formData.append('photo', this.selectedFile);


    this.animalsService.addAnimal(formData).subscribe(() => {
      this.router.navigate(['/animals']); 
    });

}

}
