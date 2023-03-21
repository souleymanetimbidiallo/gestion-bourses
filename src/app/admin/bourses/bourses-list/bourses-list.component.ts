import { Component, OnInit } from '@angular/core';
import { BourseService } from 'src/app/services/bourse.service';

@Component({
  selector: 'app-bourses-list',
  templateUrl: './bourses-list.component.html',
  styleUrls: ['./bourses-list.component.scss']
})
export class BoursesListComponent  implements OnInit {

  bourses:any = [];

  constructor(private service: BourseService) { }

  ngOnInit(): void {
    this.read();
  }

  read(){
    this.service.getAllData().subscribe((data) => {
      this.bourses = data;
    });
  }

  remove(id: any, i:any){
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.service.delete(id).subscribe((res) => {
        this.bourses.splice(i, 1);
      })
    }
  }
}