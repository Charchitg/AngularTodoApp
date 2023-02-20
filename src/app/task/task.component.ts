import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  str:string="";
  todo:Array<string>=[];
  completed:Array<string>=[];

  allTask:boolean=false;
  activeTask:boolean=false;
  completeTask:boolean=false;

  showAllTask(){
    this.allTask=true;
    this.activeTask=false;
    this.completeTask=false;
  }

  showActiveTask(){
    this.allTask=false;
    this.activeTask=true;
    this.completeTask=false;
  }

  showCompleteTask(){
    this.allTask=false;
    this.activeTask=false;
    this.completeTask=true;
  }


  add(){
    this.todo.push(this.str);
    this.showActiveTask();
  }

  delete(i : number){
    this.completed.splice(i,1);
  }

  complete(i : number){
    this.completed.push(this.todo[i]);
    this.todo.splice(i,1);
    this.showCompleteTask();
  }
}
