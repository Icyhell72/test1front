import { Component, OnInit } from '@angular/core';
import { Test1Service } from '../services/test1.service';
import { Test1 } from '../models/test1';


@Component({
  selector: 'app-test1-list',
  templateUrl: './test1-list.component.html',
  styleUrls: ['./test1-list.component.css']
})
export class Test1ListComponent implements OnInit {
  test1List?: Test1[];

  constructor(private test1Service: Test1Service) { }

  ngOnInit(): void {
    this.fetchTest1List();
  }

  fetchTest1List() {
    this.test1Service.getAllTest1().subscribe((data: Test1[]) => {
      this.test1List = data;
    });
  }
}
