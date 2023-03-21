import { Component, OnInit } from '@angular/core';
import { NiveauService } from 'src/app/services/niveau.service';

@Component({
  selector: 'app-niveaux-list',
  templateUrl: './niveaux-list.component.html',
  styleUrls: ['./niveaux-list.component.scss']
})
export class NiveauxListComponent implements OnInit {
  niveaux:any = [];

  constructor(private niveauService: NiveauService) { }

  ngOnInit(): void {
    this.readGenre();
  }

  readGenre(){
    this.niveauService.getAllData().subscribe((data) => {
      this.niveaux = data;
    });
  }

  removeGenre(id: any, i:any){
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.niveauService.delete(id).subscribe((res) => {
        this.niveaux.splice(i, 1);
      })
    }
  }
}
