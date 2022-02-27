import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, of } from 'rxjs';
import { JsonPlaceholderApiService, RemotePost } from '../json-placeholder-api.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  @Input()
  post?: RemotePost;

  constructor(private activatedRoute: ActivatedRoute, private jsonPlaceHolder: JsonPlaceholderApiService) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      mergeMap((params) => {
        if(params['id']) {
          return this.jsonPlaceHolder.getPostById(params['id']);
        } else {
          return of({} as RemotePost)
        }
      }),
      mergeMap((post)=> {
        if(post && post.id){
          this.post = post;
        }
        return of({} as RemotePost)
      })
    )
    .subscribe((params) => {
      console.log(params);
    });
  }

}
