import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

import * as $ from 'jquery';
import { NgStyle } from '@angular/common';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-addunitarysupplier',
  templateUrl: './addunitarysupplier.component.html',
  styleUrls: ['./addunitarysupplier.component.css']
})
export class AddunitarysupplierComponent implements OnInit
 {

  buttonDisabled: boolean=false;

  constructor() {

  }

  supplier_code; 
  model_1:any={};
  addSupplierCode():void{
    this.supplier_code=this.model_1;
    this.model_1={};
  }
  
  supplier_name; 
  model_2:any={};
  addSupplier_name():void{
    this.supplier_name=this.model_2;
    this.model_2={};
  }
  email_cnt=1;
  email_supplier1; 
  model_3_1:any={};
  addEmailSupplier1():void{
      this.email_cnt++;
        if(this.email_cnt==4)
        {
          this.buttonDisabled = true;
        }
    this.email_supplier1.push(this.model_3_1);
    this.model_3_1={};
    
  }
  email_supplier2; 
  model_3_2:any={};
  addEmailSupplier2():void{
   
    this.email_supplier1.push(this.model_3_2);
    this.model_3_2={};
    
  }
  email_supplier3; 
  model_3_3:any={};
  addEmailSupplier3():void{
  
    this.email_supplier1.push(this.model_3_3);
    this.model_3_3={};
    
  }
  email_supplier4; 
  model_3_4:any={};
  addEmailSupplier4():void{
   
    this.email_supplier1.push(this.model_3_4);
    this.model_3_4={};
    
  }
  removeEmailSuppliers():void{
      if(this.email_cnt==2)
      {
        this.email_supplier2=this.email_supplier3;
        this.email_supplier3=this.email_supplier4;
        this.email_supplier4=null;
      }
      if(this.email_cnt==3)
      {
        this.email_supplier3=this.email_supplier4;
        this.email_supplier4=null;
      }
      if(this.email_cnt==4)
      {
        this.email_supplier4=null;
      }
      this.email_cnt--;
  }
  contact_supplier1; 
  contactButton:boolean=false;
  contact_cnt=1;
  model_4_1:any={};
  addSupplierContact1():void{
      this.contact_cnt++;
        if(this.contact_cnt==4)
        {
             this.contactButton=true;
        }
    this. contact_supplier1.push(this.model_4_1);
    this.model_4_1={};
  }
  contact_supplier2; 
  model_4_2:any={};
  addSupplierContact2():void{
    this. contact_supplier2.push(this.model_4_2);
    this.model_4_2={};
  }

  contact_supplier3; 
  model_4_3:any={};
  addSupplierContact3():void{
    this. contact_supplier3.push(this.model_4_3);
    this.model_4_3={};
  }
  contact_supplier4; 
  model_4_4:any={};
  addSupplierContact4():void{
    this. contact_supplier4.push(this.model_4_4);
    this.model_4_4={};
  }

  removeContactSuppliers():void{
      this.contact_cnt--;
  }
  account_no;
  model_5:any={};
  addAccountNo():void{
      this.account_no=this.model_5;
      this.model_5={};
  }

  ifsc;
  model_6:any={};
  addIfsc():void{
      this.ifsc=this.model_6;
      this.model_6={};
  }

  bank_name;
  model_7:any={};
  addBankName():void{
      this.bank_name=this.model_7;
      this.model_7={};
  }
  branch_name;
  model_8:any={};
 addBranchName ():void{
      this.branch_name=this.model_8;
      this.model_8={};
  }


  ngOnInit() {

    $(document).ready(function(){
      $(".add-moree").click(function(){ 
        var html = $(".copyy").html();
        $(".after-add-moree").after(html);
    });


    $("body").on("click",".remove",function(){ 
        $(this).parents(".control-group").remove();
    });
     $(".nextBtn").click(function(){
         $("#step-1").hide();
         $("#step-2").show();
     $(".backBtn").show();
     $("#second").addClass("bg-primary");
     //$("#p1").removeClass("blu-color");
     $("#p2").addClass("blu-color");
     //$("#second").removeClass("bg-default");
     //$("#first").addClass("bg-default");
     //$("#first").removeClass("bg-primary");
     });
     $(".backBtn").click(function(){
         $("#step-2").hide();
         $("#step-1").show();
     $(".backBtn").hide();
     $("#first").addClass("bg-primary");
     $("#first").removeClass("bg-default");
     $("#second").addClass("bg-default");
     $("#second").removeClass("bg-primary");
     $("#p1").addClass("blu-color");
     $("#p2").removeClass("blu-color");
     });
    $(".approval").click(function(){
         $("#step-2").hide();
         $("#step-3").show();
     $(".backBtn").hide();
     $("#first").addClass("bg-primary");
     $("#second").addClass("bg-primary");
     $("#p1").addClass("blu-color");
     $("#p2").addClass("blu-color");
     $("#first,#second").addClass("big-circle");
     $(".tick").css({"display": "block"});
     $(".big-circle").css({"width": "16px","height":"16px"});
     });
   $("#flip").click(function(){
         $("#panel").slideToggle("slow");
     });
   $("#flip-sup").click(function(){
         $("#panel-sup").slideToggle("slow");
     });
     });
     
     var plus = 'assets/images/list-icon.png';
var minus = 'assets/images/list-icon-minus.png';

$('#magic-toggle').click(function() {
  if ($('.fun-img').attr('src') === plus) {
    $('.fun-img').attr('src', minus);
  } else {
    $('.fun-img').attr('src', plus)
  }
});
$('#magic-toggle_sup').click(function() {
    if ($('.fun-img_sup').attr('src') === plus) {
      $('.fun-img_sup').attr('src', minus);
    } else {
      $('.fun-img_sup').attr('src', plus)
    }
  });
     
    //---------------------------------------check box js -------------------------------------------

$(".place").click(function () {
    $(this).toggleClass("green");
});
//---------------------------------------check box js edn-------------------------------------------

//---------------------------------------Prevent anchor default action-------------------------------------------


$('.dropdown-menu').on('click', function (e) {
    if ($(this).hasClass('dropdown-menu')) {
        e.stopPropagation();
    }
});

//---------------------------------------Prevent anchor default action-------------------------------------------


  }

}
