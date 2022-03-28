import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabCierresPage } from './tab-cierres.page';

const routes: Routes = [
  {
    path: '',
    component: TabCierresPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
