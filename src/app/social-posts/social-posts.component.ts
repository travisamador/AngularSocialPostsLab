import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  constructor() { }

  addThought: boolean = false;

  ngOnInit(): void {
  }

  postList: Post[] = [
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool.",
      votes: 0
    },
    {
      title: "Ritual",
      thought: "Ritual is a well developed app.",
      votes: 0
    },
    {
      title: "Scott",
      thought: "Scott rides scooters.",
      votes: 0
    }
  ];

  onSubmit(post:Post){
    this.postList.unshift(post);
    this.adding();
  }

  adding():void{
    this.addThought = !this.addThought;
    console.log(this.addThought);
  }

  onDelete(post:Post):void {
    this.postList.splice(this.postList.indexOf(post), 1);
  }

}
