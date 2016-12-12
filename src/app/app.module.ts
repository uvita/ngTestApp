import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LivePreviewModule } from './live-preview/live-preview.module';

import { AppComponent } from './app.component';
import { PanelMenuModule, MenuItem } from 'primeng/primeng';
import { OverviewComponent } from './overview/overview.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './nav-bar.component';
import { AComponent } from './live-preview/a.component';
import { BComponent } from './live-preview/b.component';

export const default_routes: Routes = [
  {
    path: 'firstpage', children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: '', component: NavBarComponent, outlet: 'navbar' }
    ]
  },
  { path: '', redirectTo: 'firstpage', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ContactComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(default_routes),
    PanelMenuModule,
    LivePreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
