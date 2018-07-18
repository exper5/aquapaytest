import { Component, OnInit, Input } from '@angular/core';
import { FormDataService } from '../data/formData.service';
import { FormData } from '../data/formData.model';
import * as $ from 'jquery';
import { FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService, AlertService } from '../_services';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  title = 'Thanks for staying tuned!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    submitted = false;
  personalForm: FormGroup;
  constructor(
    private formDataService: FormDataService,
     private userService: UserService,
    private alertService: AlertService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        console.log('Result feature loaded!');


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
    


  }
//   submit() {
//     alert('Excellent Job!');
//     this.formData = this.formDataService.resetFormData();
//     this.isFormValid = false;
// }
  submit() {
    // this.submitted = true;
    alert(this.formData);
    
    // this.userService.create(this.personalForm.value)
    //   .pipe(first())
    //   .subscribe(
    //       data => {
    //          // this.alertService.success('Registration successful', true);
    //           this.router.navigate(['/dashboard']);
    //       },
    //       error => {
    //           console.log("error");
    //         //  this.alertService.error(error);
    //           // this.loading = false;
    //       });
    // console.log(this.formData.accountno, this.formData.bankname, this.formData.branchname);
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
}

}
