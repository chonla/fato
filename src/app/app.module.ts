import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppPageComponent,
    WorkspaceComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppPageComponent]
})
export class AppModule { }
