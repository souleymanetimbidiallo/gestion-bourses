import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-candidatures-list',
  templateUrl: './candidatures-list.component.html',
  styleUrls: ['./candidatures-list.component.scss']
})
export class CandidaturesListComponent implements OnInit {

  candidatures:any = [];

  constructor(private service: CandidatureService) { }

  ngOnInit(): void {
    this.read();
  }

  read(){
    this.service.getAllData().subscribe((data) => {
      this.candidatures = data;
    });
  }

  remove(id: any, i:any){
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.service.delete(id).subscribe((res) => {
        this.candidatures.splice(i, 1);
      })
    }
  }
}