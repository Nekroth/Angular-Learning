import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "/posts"
  },
  { path: 'test1', component: Test1Component},
  { path: 'template-form', component: TemplateFormComponent},
  { path: 'reactive-form', component: ReactiveFormComponent},
  { path: 'posts', component: PostListComponent},
  { path: 'post/:id', component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
