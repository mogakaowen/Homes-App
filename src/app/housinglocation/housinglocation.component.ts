import { Component, Input } from '@angular/core';
import{ Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housinglocation',
  templateUrl: './housinglocation.component.html',
  styleUrls: ['./housinglocation.component.css']
})
export class HousinglocationComponent {
  @Input() housinglocation!: Housinglocation;

}
