import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuillTextEditorComponent } from './quill-text-editor.component';

const declarations = [
  QuillTextEditorComponent
];

const providers = [

];

@NgModule({
  declarations: declarations,
  imports: [
    CommonModule,
	  FormsModule,
    ReactiveFormsModule,
    RouterModule	
  ],
  providers,
  exports:declarations
})
export class QuillTextEditorModule { }
