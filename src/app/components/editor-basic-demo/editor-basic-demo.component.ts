import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
 
@Component({
  selector: 'app-editor-basic-demo',
  standalone: true,
  imports: [FormsModule, EditorModule],
  templateUrl: './editor-basic-demo.component.html',
  styleUrl: './editor-basic-demo.component.css'
})
export class EditorBasicDemoComponent {
  text: string | undefined;
}
