import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { GroupService } from './group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  listgroups: any = [];
  search: string;
  group: any = [];

  constructor(private groups: GroupService) { }

  ngOnInit(): void {
    this.groups.Listgroups().subscribe( result => {
      this.listgroups = result.data.groups;
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    console.log(event);
   /*  if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    } */
  }

}
