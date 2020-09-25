import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {
  
  li:any; 
  lis=[]; 
  username:any;
  param:any;
  constructor(private http : HttpClient){ } 

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts') 
    .subscribe(Response => { 
      this.li=Response;
     this.li.forEach(element => {
       console.log(element.userId);

       if(element.userId===1)
       {
        this.username='Ajay';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }

       if(element.userId===2)
       {
        this.username='Bunty';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }

       if(element.userId===3)
       {
        this.username='Chintan';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }

       if(element.userId===4)
       {
        this.username='Darshan';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }

       if(element.userId===5)
       {
        this.username='Rakesh';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }

       if(element.userId===6)
       {
        this.username='Mayank';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }

       if(element.userId===7)
       {
        this.username='Ramesh';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }

       if(element.userId===8)
       {
        this.username='Suresh';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }

       if(element.userId===9)
       {
        this.username='Jay';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }

       if(element.userId===10)
       {
        this.username='Prem';
         this.param={
           'username':this.username,
           'title':element.title,
           'post':element.body
         }
         this.lis.push(this.param)
       }


     });
    }); 
    
  }

}
