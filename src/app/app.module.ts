import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppPageComponent } from './pages/app-page/app-page.component';
import { WorkspaceComponent } from './components/workspace/workspace.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TimerComponent } from './components/timer/timer.component';
import { DurationPickerComponent } from './components/duration-picker/duration-picker.component';
import { TouchSelectComponent } from './components/touch-select/touch-select.component';

@NgModule({
  declarations: [
    AppPageComponent,
    WorkspaceComponent,
    SidebarComponent,
    TimerComponent,
    DurationPickerComponent,
    TouchSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppPageComponent]
})
export class AppModule { }
