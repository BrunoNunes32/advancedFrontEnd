import { Component, OnInit } from '@angular/core';
import studentData from '../../students.json'
import { Router } from '@angular/router';

interface Student{
  id: number;
  name: string;
  email: string;
  gender: string;
}

@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css']
})
export class ManipulandoJsonComponent implements OnInit {

  students: Student[] = studentData;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotToDetail(student:Student){
    this.router.navigate(['detalhe', student.id])
  }

}
