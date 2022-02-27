import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonCard2Component } from './person-card2/person-card2.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TestPathParamsComponent } from './test-path-params/test-path-params.component';
import { TestQueryParamsComponent } from './test-query-params/test-query-params.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PostDetailComponent } from './post-detail/post-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    PersonCardComponent,
    PersonCard2Component,
    TemplateFormComponent,
    ReactiveFormComponent,
    TestPathParamsComponent,
    TestQueryParamsComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
