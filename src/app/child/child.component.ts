import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() list: any;
  id: string;
  constructor(private data: DataService,
              private router: Router,
              private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.list = message);
    this.id = this.routes.snapshot.params.id;
  }

  callForm(){
    this.router.navigate(['/form'])
        .then(success => console.log('navigation success?' , success))
        .catch(console.error);
  }

}
