import { Component, OnInit } from '@angular/core';
import Parallax from 'parallax-js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var scene = document.getElementById('scene');
		var parallax = new Parallax(scene);
  }

}
