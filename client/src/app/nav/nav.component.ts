import { Component, OnInit } from '@angular/core';
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

  constructor(private gitHubService: GitHubService) { }

  ngOnInit(): void {
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
