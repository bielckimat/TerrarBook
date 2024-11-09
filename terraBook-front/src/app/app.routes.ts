import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AnimalFormComponent } from './animal/animal-form/animal-form.component';
import { AnimalComponent } from './animal/animal.component';
export const routes: Routes = [
    {path: 'add-animal', component: AnimalFormComponent},
    { path: 'animals', component: AnimalComponent },
    { path: '', component: AnimalComponent }
];
