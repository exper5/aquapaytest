import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-addunitarysupplier',
  templateUrl: './addunitarysupplier.component.html',
  styleUrls: ['./addunitarysupplier.component.css']
})
export class AddunitarysupplierComponent implements OnInit {

  constructor() { }

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
     $(document).ready(function(){			
        var opdcount = 1;
            $("button[id^='add_div']").click(function(){
            var attri=$(this).attr('class');
         
            opdcount++;
            if(opdcount<5){
            var opdnewclass=attri.replace('add','append');
            var opdtr = "opdtr" + opdcount;
        
            var tbodyopd = ("#new_id");
            var addnewclass=attri.replace('append','add');
            var add="add" + addnewclass;
            
            var op = $("<div id="+ opdtr +" ><div class='control-group input-group user-input-wrp' style='margin-top:36px'><input type='email' name='addmore[]' class='input-text'> <label class='label floating-label' for='email' id='email_count'>Supplier Email "+ opdcount +"</label><div class='input-group-btn bordr'> <button class='btn remove' type='button'>-</button></div></div></div>");
            
            op.appendTo(tbodyopd);
            }
            else{

                alert("Can not add more than 4 email");
            }
            
        });
    });
    var opdcount_sup = 1;
   
                                    $("button[id^='add_div_sup']").click(function(){
                                    var attri=$(this).attr('class');
                                    
                                    opdcount_sup++;
                                    var op;
                                    if(opdcount_sup<5){

                                       // alert("inside if");
                                        var opdnewclass_sup=attri.replace('add_sup','append_sup');
                                        var opdtr_sup = "opdtr_sup" + opdcount_sup;
                                        
                                        var tbodyopd_sup = ("#new_id_sup");
                                        var addnewclass_sup=attri.replace('append_sup','add_sup');
                                        var add="add_sup" + addnewclass_sup;
                                        var op_sup = $("<div id="+ opdtr_sup +" ><div class='control-group  input-group ' onfocusout='uptext();' style='margin-top:36px'><input type='email' name='addmore[]' class='input-text'> <label class='label floating-label' for='email' id='email_count'>Supplier Contact "+ opdcount_sup +"</label><div class='input-group-btn bordr'> <button class='btn remove' type='button'>-</button></div></div></div>");
                                        op_sup.appendTo(tbodyopd_sup);
                                        op.appendTo("");
                                    }
                                    else{
                                        alert("Can not add more than 4 contact");
                                       op.appendTo("");
                                    }
								});
     $("body").on("click",".remove",function(){ 
$(this).parents(".control-group").remove();
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
