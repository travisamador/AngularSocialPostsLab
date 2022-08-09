import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() post: Post = {} as Post; 

  upvote(post:Post)
  {
    post.votes++;
  }

  @Output() deleted = new EventEmitter<Post>();
  deletePost():void{
    this.deleted.emit(this.post);
  }
}
