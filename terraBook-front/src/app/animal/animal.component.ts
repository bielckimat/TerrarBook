import { Component,Input, OnInit} from '@angular/core';
import { AnimalsService } from '../animals.service';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})

export class AnimalComponent implements OnInit{
  animals: any[] = []; 

  constructor(private animalsService: AnimalsService) {}


  ngOnInit(): void {

    this.animalsService.getAnimals().subscribe(
      (data) => {
        this.animals = data; 
        console.log(this.animals);  
      },
      (error) => {
        console.error('Wystąpił błąd:', error);  // Obsługa błędów
      }
    );
  }
}