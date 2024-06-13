import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDeviceComponent } from './pages/card-device/card-device.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'card-device', component: CardDeviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
