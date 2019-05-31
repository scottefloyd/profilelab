import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [

  { path: "", redirectTo: "/profile", pathMatch: "full" },
  { path: "profile", component: ProfileComponent },
  { path: "edit", component: EditComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
