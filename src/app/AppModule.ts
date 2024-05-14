import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './layouts/dashboard/dashboard.module';


//import { PipesYDirectivasComponent } from './layouts/dashboard/pages/pipes-y-directivas/pipes-y-directivas.component';




@NgModule({
  declarations: [
    AppComponent,
    //PipesYDirectivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
