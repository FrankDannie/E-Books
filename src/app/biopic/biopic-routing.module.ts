import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiopicPage } from './biopic.page';

const routes: Routes = [
  {
    path: '',
    component: BiopicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiopicPageRoutingModule {}
