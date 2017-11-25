import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../content/data.service';

@Component({
  selector: 'story-comment',
  templateUrl: './story-comment.component.html',
  styleUrls: ['./story-comment.component.css']
})
export class StoryCommentComponent implements OnInit {

  @Input() commentId;
  comment$;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.comment$ = this.data.getItem(this.commentId);
  }

}
