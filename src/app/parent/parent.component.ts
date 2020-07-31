import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DataService} from '../data.service';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  list = [];
  id: string;
  submitStatus = false;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private data: DataService,
              private router: Router) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.list = message);
  }

  submitData(fname: any, lname: any, country: any){
    if (fname === '' || lname === '') {
      alert('Enter all the fields');
    }else {
      this.generateUUID();
      this.list.push({id: this.id, fname, lname, country});
      this.submitStatus = true;
      this.sendMessage();
      this.router.navigate(['form/' + this.id + '/results'])
          .then(success => console.log('navigation success?' , success))
          .catch(console.error);
    }
  }

  generateUUID(){
    this.id = UUID.UUID();
    return this.id;
  }

  sendMessage() {
    this.messageEvent.emit(this.list);
  }
}
