import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, AlertService } from '../../_services';
import { first } from 'rxjs/operators';
// //import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-cagroups',
  templateUrl: './cagroups.component.html',
  styleUrls: ['./cagroups.component.css']
})
export class CagroupsComponent implements OnInit {
  addgroup: FormGroup;
    
    loading = false;
    submitted = false;
  constructor(
    private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        private alertService: AlertService
  ) { }

  ngOnInit() {
    this.addgroup = this.formBuilder.group({
      grpname: ['', Validators.required],
      lwrlimit: ['', Validators.required],
      uprlimit: ['', Validators.required],
    
  });
  
    $(".Resetin").on("click", function () {
      $(".input-text").val("");
     
    });




    $(".gtog").on("click", function () {
      $(".paylink").addClass("active");
      $(".paylink").siblings(".active").removeClass("active");
    });

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
         $("#step-3").show();
    
     });

     $(document).ready(function(){
    
    
        $('.gotogroups').click(function () {
          $("#step-1").show();
          $("#step-3").hide();
      
         
        });
  
      });
    
    
   $("#flip").click(function(){
         $("#panel").slideToggle("slow");
     });
   $("#flip-sup").click(function(){
         $("#panel-sup").slideToggle("slow");
     });
     });
     
     $(document).ready(function(){			
        var opdcount = 1;
            $("button[id^='add_div']").click(function(){
            var attri=$(this).attr('class');
            opdcount++;
            var opdnewclass=attri.replace('add','append');
            var opdtr = "opdtr" + opdcount;
        
            var tbodyopd = ("#new_id");
            var addnewclass=attri.replace('append','add');
            var add="add" + addnewclass;
            var op = $("<div id="+ opdtr +" ><div class='control-group input-group' style='margin-top:36px'><input type='email' name='addmore[]' class='input-text'> <label class='label' for='email' id='email_count'>Supplier Email "+ opdcount +"</label><div class='input-group-btn bordr'> <button class='btn remove' type='button'>-</button></div></div></div>");
            op.appendTo(tbodyopd);
            
        });
    });
    var opdcount_sup = 1;
                                    $("button[id^='add_div_sup']").click(function(){
									var attri=$(this).attr('class');
									opdcount_sup++;
									var opdnewclass_sup=attri.replace('add_sup','append_sup');
									var opdtr_sup = "opdtr_sup" + opdcount_sup;
									
									var tbodyopd_sup = ("#new_id_sup");
									var addnewclass_sup=attri.replace('append_sup','add_sup');
									var add="add_sup" + addnewclass_sup;
									var op_sup = $("<div id="+ opdtr_sup +" ><div class='control-group input-group' style='margin-top:36px'><input type='email' name='addmore[]' class='input-text'> <label class='label' for='email' id='email_count'>Supplier Contact "+ opdcount_sup +"</label><div class='input-group-btn bordr'> <button class='btn remove' type='button'>-</button></div></div></div>");
									op_sup.appendTo(tbodyopd_sup);
									op_sup.appendTo("");
								});
     $("body").on("click",".remove",function(){ 
$(this).parents(".control-group").remove();
});
    

  }



  get f() { return this.addgroup.controls; }

  onSubmit() {
      this.submitted = true;
     // console.log('submitted');
      // stop here if form is invalid
      if (this.addgroup.invalid) {
        console.log("error");
          return;
      }

      this.loading = true;
      console.log(this.addgroup.value);
      this.userService.creategroup(this.addgroup.value)
          .pipe(first())
          .subscribe(
              data => {
                 console.log('success');
                  // this.router.navigate(['/login']);
              },
              error => {
                  console.log("error");
                 this.alertService.error(error.error.error);
                  this.loading = false;
              });
  }

}
