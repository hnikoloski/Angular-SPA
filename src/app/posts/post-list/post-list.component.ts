import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', content: 'First post Content'},
  //   {title: 'Second Post', content: 'Second post Content'},
  //   {title: 'Third Post', content: 'Third post Content'},
  // ];
  @Input() posts = [];
}
