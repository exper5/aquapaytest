import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router, ActivatedRoute }              from '@angular/router';
// //import * as $ from 'jquery';
import { NgStyle } from '@angular/common';
import { FormDataService } from '../../data/formData.service';
import { Personal } from '../../data/formData.model';
import { User } from '../../_models';
import { UserService } from '../../_services';
import { first } from 'rxjs/operators';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { id } from '@swimlane/ngx-datatable/release/utils';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-addunitarysupplier',
  templateUrl: './addunitarysupplier.component.html',
  styleUrls: ['./addunitarysupplier.component.css']
})
export class AddunitarysupplierComponent implements OnInit
 {
  title = 'Please tell us about yourself.';
  personal: Personal;
  buttonDisabled: boolean=false;
    checkers: User[] = [];
    currentUser: User;
    // optionsModel: number[];
    // myOptions: IMultiSelectOption[];
    vendet: any;
     user_Rec:any;

  constructor(private router: Router, private formDataService: FormDataService, private userService: UserService,  private route: ActivatedRoute,) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.user_Rec={};
  }

  
  email_cnt=1;
  email; 
  model_3_1:any={};
  addEmailSupplier1():void{
      this.email_cnt++;
        if(this.email_cnt==4)
        {
          this.buttonDisabled = true;
        }
    this.email.push(this.model_3_1);
    this.model_3_1={};
    
  }
  email1; 
  model_3_2:any={};
  addEmailSupplier2():void{
   
    this.email.push(this.model_3_2);
    this.model_3_2={};
    
  }
  email2; 
  model_3_3:any={};
  addEmailSupplier3():void{
  
    this.email.push(this.model_3_3);
    this.model_3_3={};
    
  }
  email3; 
  model_3_4:any={};
  addEmailSupplier4():void{
   
    this.email.push(this.model_3_4);
    this.model_3_4={};
    
  }
  removeEmailSuppliers():void{
      if(this.email_cnt==2)
      {
        this.email1=this.email2;
        this.email2=this.email3;
        this.email3=null;
      }
      if(this.email_cnt==3)
      {
        this.email2=this.email3;
        this.email3=null;
      }
      if(this.email_cnt==4)
      {
        this.email3=null;
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
  

  ngOnInit() {

    
    this.loadAllUsers();
    

    this.route.params.subscribe(params => {

      console.log(params['id']);
     if(params['id']){
      this.userService.getById(params['id']).subscribe(user =>{
        let tempchecker=[];  
        this.user_Rec = user['vendors']; 
        this.personal.vendorcode=user['vendors']['vendorcode'],
        this.personal.name=user['vendors']['name'],
        this.personal.email=user['vendors']['email'],
        this.personal.contact=user['vendors']['contact'],
        this.personal.contact1=user['vendors']['contact1'],
        this.personal.contact2=user['vendors']['contact2'],
        this.personal.contact3=user['vendors']['contact3'],
        this.personal.accno=user['vendors']['accno'],
        this.personal.ifsc=user['vendors']['ifsc']
        this.personal.bank=user['vendors']['bank']
        this.personal.branch=user['vendors']['branch'],
        this.personal.notification=user['vendors']['ispaymentadvice'],
        user['checkerlist'].forEach(obj => {
          tempchecker.push(obj["id"]);
          console.log(obj);
        });
        console.log(tempchecker);
      
        let checkerstr=tempchecker.join(',');
        console.log(checkerstr);
        this.personal.selectcheckertemp=checkerstr

        console.log(user['checkerlist']['selectcheckertemp']);
        // this.personal.patchValue({
        //   vendorcode : user['vendorcode'],
        //   name : user['name'],
        //     email:user['email'],
        //     contact:user['contact'],
        //     accno:user['accno'],
        //     ifsc:user['ifsc'],
        //     bank:user['bank'],
        //     branch:user['branch'],
         
            
        // });
         
      });
     }
     
     
    //  this.vendordetails(params['id']);
    });
    
    this.personal = this.formDataService.getPersonal();
    console.log('Personal feature loaded!');

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


  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataService.setPersonal(this.personal);
    return true;
}

goToNext(form: any) {
    if (this.save(form)) {
      this.route.params.subscribe(params => {
        if(params['id']){
        // Navigate to the work page
        this.router.navigate(['/result', params['id']]);
        }
        else{
          this.router.navigate(['/result']);
        }
      });
    }
}
private loadAllUsers() {
  this.userService.getAll().pipe(first()).subscribe(result => { 
      this.checkers = result['data']; 
      console.log(result['data']);
  });
}


private vendordetails(id) {
  this.userService.getById(id).pipe(first()).subscribe(result => { 
      this.vendet = result['vendors']; 
      console.log(result['vendors']);
      
  });
}



// onChange() {
//   console.log(this.optionsModel);
// }
}
