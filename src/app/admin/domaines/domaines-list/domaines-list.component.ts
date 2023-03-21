import { Component,OnInit } from '@angular/core';
import { DomaineService } from 'src/app/services/domaine.service';

@Component({
  selector: 'app-domaines-list',
  templateUrl: './domaines-list.component.html',
  styleUrls: ['./domaines-list.component.scss']
})
export class DomainesListComponent implements OnInit {
  domaines:any = [];

  constructor(private domaineService: DomaineService) { }

  ngOnInit(): void {
    this.readGenre();
  }

  readGenre(){
    this.domaineService.getAllData().subscribe((data) => {
      this.domaines = data;
    });
  }

  removeGenre(id: any, i:any){
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.domaineService.delete(id).subscribe((res) => {
        this.domaines.splice(i, 1);
      })
    }
  }
}