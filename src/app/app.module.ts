import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FreeDraggingDirective } from './shared/free-dragging.directive';
import { FreeDraggingHandleDirective } from './shared/free-dragging-handle.directive';
import { KeyboardComponent } from './keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    FreeDraggingDirective,
    FreeDraggingHandleDirective,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
     RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: '**', component: PageNotFoundComponent}
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
