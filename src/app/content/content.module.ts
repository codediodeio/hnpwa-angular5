import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryFeedComponent } from './story-feed/story-feed.component';
import { StoryItemComponent } from './story-item/story-item.component';
import { StoryDetailComponent } from './story-detail/story-detail.component';
import { StoryCommentComponent } from './story-comment/story-comment.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UiModule } from '../ui/ui.module';

import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { DataService } from './data.service';


const routes: Routes = [
  { path: 'news', component: StoryFeedComponent },
  { path: 'top',  data: { feed: 'topstories' },  component: StoryFeedComponent },
  { path: 'new',  data: { feed: 'newstories' },  component: StoryFeedComponent },
  { path: 'ask',  data: { feed: 'askstories' },  component: StoryFeedComponent },
  { path: 'show', data: { feed: 'showstories' }, component: StoryFeedComponent },
  { path: 'jobs', data: { feed: 'jobstories' },  component: StoryFeedComponent },

  { path: 'item/:id', component: StoryDetailComponent },
  { path: 'user/:id', component: UserDetailComponent },
];


@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
    AngularFireModule.initializeApp({ databaseURL: 'https://hacker-news.firebaseio.com'}),
    AngularFireDatabaseModule
  ],
  declarations: [StoryFeedComponent, StoryItemComponent, StoryDetailComponent, StoryCommentComponent, UserDetailComponent],
  providers: [DataService]
})
export class ContentModule { }
