import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //<!-- brose file -->
								$('#my-file-selector').on('change',function(){
  $('#upload-file-info').val($(this).val())
})
  }

}
