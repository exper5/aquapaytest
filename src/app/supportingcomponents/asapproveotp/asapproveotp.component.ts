import { Component, OnInit } from '@angular/core';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-asapproveotp',
  templateUrl: './asapproveotp.component.html',
  styleUrls: ['./asapproveotp.component.css']
})
export class AsapproveotpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.inputstyle').bind('keyup', function(event) {
      var val=$(this).val();
      if(val != ''){
       
        
          $(this).parent().next().find('input').focus();
        
       }
    });

    
  }

}
