import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HultPrizeComponent } from './components/hult-prize/hult-prize.component';
import { BoardComponent } from './components/board/board.component';
import { AwardsComponent } from './components/awards/awards.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DetailsComponent } from './components/details/details.component';
import { BestLeadersComponent } from './components/best-leaders/best-leaders.component';
import { BestMembersComponent } from './components/best-members/best-members.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HultPrizeComponent,
    BoardComponent,
    AwardsComponent,
    NavComponent,
    DetailsComponent,
    BestLeadersComponent,
    BestMembersComponent,
    FooterComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
