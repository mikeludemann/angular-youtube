import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './youtube-embed/youtube/youtube.component';
import { YoutubePlaylistComponent } from './youtube-embed/youtube-playlist/youtube-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent,
    YoutubePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
