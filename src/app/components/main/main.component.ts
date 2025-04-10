import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FaqComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
