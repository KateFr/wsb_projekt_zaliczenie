import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkTableModule} from "@angular/cdk/table";
import {MatButtonModule, MatCheckboxModule,MatInputModule,MatFormFieldModule,MatCardModule,MatExpansionModule,MatIconModule} from "@angular/material";


@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule

],
  exports: [
    CdkTableModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule
  ],
  declarations: []
})
export class MaterialModule { }