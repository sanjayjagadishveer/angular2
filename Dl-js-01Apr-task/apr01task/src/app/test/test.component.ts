import { Component, OnInit,Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData:any;
  @Output() childEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent()
  {
    this.childEvent.emit('hey sanjay');
  }

}
