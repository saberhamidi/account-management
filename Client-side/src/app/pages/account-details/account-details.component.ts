import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

	account:any;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getAccount(this.route.snapshot.params['id']);
  }

  getAccount(id) {
    this.http.get('/api/accounts/'+id, {headers: {"Content-Type":"application/json"}}).subscribe(data => {
      this.account = data;
    });
  }

  edit(){
  	this.router.navigate(['/edit-account', this.account.id]);
  }
}
