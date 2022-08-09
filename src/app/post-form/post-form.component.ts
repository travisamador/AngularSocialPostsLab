import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // @Input() newestPost: Post = {title: '', thought: '', votes: 0};


  @Output() submitted = new EventEmitter<Post>();

  submitPost(form:NgForm):void{
    let newPost:Post = {
      title: form.form.value.title,
      thought: form.form.value.thought,
      votes: 0
    }
    this.submitted.emit(newPost);
  }

}
