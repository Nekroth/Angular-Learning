import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderApiService, RemotePost } from '../json-placeholder-api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Array<RemotePost> = [];

  constructor(private jsonPlaceholderService: JsonPlaceholderApiService) { }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.jsonPlaceholderService.getAllPosts().subscribe((posts) => (this.posts = posts));
  }
}
