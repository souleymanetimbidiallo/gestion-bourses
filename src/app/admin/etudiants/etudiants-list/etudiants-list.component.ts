import { Component,OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-etudiants-list',
  templateUrl: './etudiants-list.component.html',
  styleUrls: ['./etudiants-list.component.scss']
})
export class EtudiantsListComponent implements OnInit {

  etudiants:any = [];

  constructor(private service: EtudiantService) { }

  ngOnInit(): void {
    this.read();
  }

  read(){
    this.service.getAllData().subscribe((data) => {
      this.etudiants = data;
    });
  }

  remove(id: any, i:any){
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.service.delete(id).subscribe((res) => {
        this.etudiants.splice(i, 1);
      })
    }
  }
}