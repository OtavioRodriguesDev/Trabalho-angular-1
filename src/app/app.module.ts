import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageYeezyComponent } from './page-yeezy/page-yeezy.component';
import { PageJordanComponent } from './page-jordan/page-jordan.component';
import { PageDunkLowComponent } from './page-dunk-low/page-dunk-low.component';
import { PageConverseComponent } from './page-converse/page-converse.component';
import { PageFilaComponent } from './page-fila/page-fila.component';
import { PageVansComponent } from './page-vans/page-vans.component';
import { PagePumaComponent } from './page-puma/page-puma.component';
import { PageAdidasComponent } from './page-adidas/page-adidas.component';
import { PageNikeComponent } from './page-nike/page-nike.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNewBalanceComponent } from './page-new-balance/page-new-balance.component';


@NgModule({
  declarations: [
    AppComponent,
    PageYeezyComponent,
    PageJordanComponent,
    PageDunkLowComponent,
    PageConverseComponent,
    PageFilaComponent,
    PageVansComponent,
    PagePumaComponent,
    PageAdidasComponent,
    PageNikeComponent,
    PageNewBalanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "", redirectTo:'/home', pathMatch: 'full'},
      { path: "brands/tenis-nike", component: PageNikeComponent },
      { path: "brands/tenis-adidas", component: PageAdidasComponent },
      { path: "brands/tenis-puma", component: PagePumaComponent },
      { path: "brands/tenis-vans", component: PageVansComponent },
      { path: "brands/tenis-fila", component: PageFilaComponent },
      { path: "brands/tenis-converse", component: PageConverseComponent },
      { path: "brands/tenis-new-balance", component: PageNewBalanceComponent },
      { path: "brands/nike-dunk-low", component: PageDunkLowComponent },
      { path: "brands/nike-jordan", component: PageJordanComponent },
      { path: "brands/adidas-yeezy", component: PageYeezyComponent },
      { path: "**", component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
