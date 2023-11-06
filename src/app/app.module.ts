import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { FormsModule } from '@angular/forms';
import { ProgressComponent } from './progress/progress.component';
@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ArticleModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
