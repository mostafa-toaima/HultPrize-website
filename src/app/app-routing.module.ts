import { NotfoundComponent } from './components/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HultPrizeComponent } from './components/hult-prize/hult-prize.component';
import { BoardComponent } from './components/board/board.component';
import { DetailsComponent } from './components/details/details.component';
import { BestLeadersComponent } from './components/best-leaders/best-leaders.component';
import { BestMembersComponent } from './components/best-members/best-members.component';
import { AwardsComponent } from './components/awards/awards.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', title: 'Home' },
  { path: 'home', component: HultPrizeComponent, title: 'Home' },
  { path: 'board', component: BoardComponent, title: 'Board' },
  { path: 'awards', component: AwardsComponent, title: 'Awards' },
  { path: 'details/:id', component: DetailsComponent, title: 'Details' },
  {
    path: 'best-leaders',
    component: BestLeadersComponent,
    title: 'Best leaders',
  },
  {
    path: 'best-members',
    component: BestMembersComponent,
    title: 'Best members',
  },
  { path: '**', component: NotfoundComponent, title: 'Not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
