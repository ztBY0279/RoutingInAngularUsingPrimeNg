import { Component } from '@angular/core';
import { EditorBasicDemoComponent } from '../editor-basic-demo/editor-basic-demo.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EditorBasicDemoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
