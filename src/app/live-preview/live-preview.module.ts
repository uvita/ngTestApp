import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AComponent } from './a.component';
import { BComponent } from './b.component';

export const preview_routes: Routes = [
  {
    path: 'live-preview', children: [
      { path: 'a', component: AComponent },
      { path: 'b', component: BComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(preview_routes)
  ],
  declarations: [AComponent, BComponent]
})
export class LivePreviewModule { }
