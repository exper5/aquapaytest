import { Component, OnInit } from '@angular/core';
import { MasterServiceService} from './master-service.service'
import * as $ from 'jquery';

declare var variableName:any;
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  
  ngOnInit(): void {
    $(".nav a").on("click", function () {
      $(".nav").find(".active").removeClass("active");
      $(this).parent().addClass("active");
    });
  }
  title = 'app';
  
}
