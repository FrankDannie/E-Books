import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DramaPage } from './drama.page';

const routes: Routes = [
  {
    path: '',
    component: DramaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DramaPageRoutingModule {}
