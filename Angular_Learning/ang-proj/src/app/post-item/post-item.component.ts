import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemotePost } from '../json-placeholder-api.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input()
  post?: RemotePost;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToPostDetail(): void {
    this.router.navigate([`/post/` + this.post?.id]);
  }
}
