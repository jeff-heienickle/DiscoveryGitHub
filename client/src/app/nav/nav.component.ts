import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { GitHubService } from '../services/github.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any ={};
  totalCount: number;
  searchResults: any ={};
  showBoundaryLinks: boolean = false;
  showDirectionLinks: boolean = true;
  maxSize: 5;

  constructor(private gitHubService: GitHubService) { }

  ngOnInit(): void {
    this.model.pageSize=5;
  }
  
  pageChanged(event: PageChangedEvent): void {
    this.model.page = event.page;
    this.search();
 }
 
  search() {
    console.log(this.model);
    this.gitHubService.search(this.model).subscribe(response =>{
      this.searchResults = response;
      console.log(response);
    }, error => {
      console.log(error)
    })
  }

}
