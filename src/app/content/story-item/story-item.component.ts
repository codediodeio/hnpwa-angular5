import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../content/data.service';


@Component({
  selector: 'story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {

  @Input() itemId;
  @Input() preload;
  item$;


  constructor(private data: DataService) { }

  ngOnInit() {
    this.item$ = this.data.getItem(this.itemId); 
  }

}
