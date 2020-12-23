import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  @Input() username: string;
  userDetails: any ={};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {    
    this.http.get('https://api.github.com/users/' + this.username).subscribe(response => {
      this.userDetails = response;
  }, error => {
    console.log(error);
  })
  }
}
