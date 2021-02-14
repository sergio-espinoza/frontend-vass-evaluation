import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import {
  ShowDirective
} from './directives';

import {
  SatinizerPipe,
  TypeOfDataPipe,
  ValidLabelPipe,
  CheckUncheckPipe,
  CloseObjectPipe,
  DateBindingPipe,
} from './pipes';

// const COMPONENTS = [];

const DIRECTIVES = [
  ShowDirective
];

const PIPES = [
  SatinizerPipe,
  ValidLabelPipe,
  TypeOfDataPipe,
  CheckUncheckPipe,
  CloseObjectPipe,
  DateBindingPipe
];

// const DIALOGS = [];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    // ...COMPONENTS,
    DIRECTIVES,
    ...PIPES
  ],
  declarations: [
    // ...COMPONENTS,
    DIRECTIVES,
    ...PIPES,
    // ...DIALOGS
  ],

  providers: [],
})
export class SharedModule { }
