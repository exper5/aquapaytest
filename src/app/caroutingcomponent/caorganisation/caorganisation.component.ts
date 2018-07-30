import { Component, OnInit } from '@angular/core';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-caorganisation',
  templateUrl: './caorganisation.component.html',
  styleUrls: ['./caorganisation.component.css']
})
export class CaorganisationComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      $(".success").hide();
    
      $('.activeapp').click(function () {
        $(".success").show();
        $(".abc").hide();
      });

    });

  }

}
