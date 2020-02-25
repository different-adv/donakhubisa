import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { CauseComponent } from './cause/cause.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'Profile', component: ProfileComponent},
{path: 'About', component: AboutComponent},
{path: 'Cause', component: CauseComponent},
{path: 'Contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, ProfileComponent,AboutComponent,CauseComponent,ContactComponent] 

