import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './supportingcomponents/home/home.component';
import { CardsliderComponent } from './supportingcomponents/cardslider/cardslider.component';
import { PaystatusComponent } from './supportingcomponents/paystatus/paystatus.component';
import { DatepickerComponent } from './supportingcomponents/datepicker/datepicker.component';
import { SupstatusComponent } from './supportingcomponents/supstatus/supstatus.component';
import { ToppaymentComponent } from './supportingcomponents/toppayment/toppayment.component';
import { CardactivityComponent } from './supportingcomponents/cardactivity/cardactivity.component';
import { LastpaymentComponent } from './supportingcomponents/lastpayment/lastpayment.component';
import { Routes,RouterModule} from '@angular/router';
import { DashboardComponent } from './routingcomponent/dashboard/dashboard.component';
import { AddunitarysupplierComponent } from './routingcomponent/addunitarysupplier/addunitarysupplier.component';
import { FileuploadComponent } from './supportingcomponents/fileupload/fileupload.component';
import { ListpaymentComponent } from './routingcomponent/listpayment/listpayment.component';
import { CheckboxComponent } from './supportingcomponents/checkbox/checkbox.component';
import { FaqComponent } from './supportingcomponents/faq/faq.component';
import { ReportnameComponent } from './supportingcomponents/reportname/reportname.component';
import { MakeunitarypaymentComponent } from './routingcomponent/makeunitarypayment/makeunitarypayment.component';
import { PaysliderComponent } from './supportingcomponents/payslider/payslider.component';
import { NavfilterComponent } from './supportingcomponents/navfilter/navfilter.component';
import { PaycardtabComponent } from './supportingcomponents/paycardtab/paycardtab.component';
import { PaginationComponent } from './supportingcomponents/pagination/pagination.component';
import { PaymentreviewdetalsComponent } from './supportingcomponents/paymentreviewdetals/paymentreviewdetals.component';
import { RulevalidatorComponent } from './supportingcomponents/rulevalidator/rulevalidator.component';
import { CardsComponent } from './supportingcomponents/cards/cards.component';
import { MyprofileComponent } from './supportingcomponents/myprofile/myprofile.component';
import { ContactusComponent } from './supportingcomponents/contactus/contactus.component';
import { NotificationmatrixComponent } from './supportingcomponents/notificationmatrix/notificationmatrix.component';
import { MakebulkpaymentComponent } from './routingcomponent/makebulkpayment/makebulkpayment.component';
import { PaymentreviewuploadedfileComponent } from './supportingcomponents/paymentreviewuploadedfile/paymentreviewuploadedfile.component';
import { SelectcardComponent } from './supportingcomponents/selectcard/selectcard.component';
import { AddbulksuppierComponent } from './routingcomponent/addbulksuppier/addbulksuppier.component';
import { SupplierreviewdetailsComponent } from './supportingcomponents/supplierreviewdetails/supplierreviewdetails.component';
import { SupplierlistComponent } from './routingcomponent/supplierlist/supplierlist.component';
import { SuppliersreportComponent } from './supportingcomponents/suppliersreport/suppliersreport.component';
import { SelectcarddetailsComponent } from './supportingcomponents/selectcarddetails/selectcarddetails.component';
import { MakernavigationComponent } from './supportingcomponents/makernavigation/makernavigation.component';
import { AsnavComponent } from './supportingcomponents/asnav/asnav.component';
import { AsorganisationComponent } from './asroutingcomponent/asorganisation/asorganisation.component';
import { MasterComponent } from './master/master.component';
import { AsnotificationmatrixComponent } from './asroutingcomponent/asnotificationmatrix/asnotificationmatrix.component';
import { AscontactusComponent } from './asroutingcomponent/ascontactus/ascontactus.component';
import { AsmyprofileComponent } from './asroutingcomponent/asmyprofile/asmyprofile.component';
import { AsfaqComponent } from './asroutingcomponent/asfaq/asfaq.component';
import { AsapprovecardComponent } from './supportingcomponents/asapprovecard/asapprovecard.component';
import { AsgrouplistComponent } from './asroutingcomponent/asgrouplist/asgrouplist.component';
import { AsgroupspendingComponent } from './asroutingcomponent/asgroupspending/asgroupspending.component';
import { AsgroupsuccessmsgComponent } from './supportingcomponents/asgroupsuccessmsg/asgroupsuccessmsg.component';
import { AsviewrulesComponent } from './asroutingcomponent/asviewrules/asviewrules.component';
import { AsrulevalidationComponent } from './asroutingcomponent/asrulevalidation/asrulevalidation.component';
import { AsrulesucessmsgComponent } from './supportingcomponents/asrulesucessmsg/asrulesucessmsg.component';
import { AsapproveotpComponent } from './supportingcomponents/asapproveotp/asapproveotp.component';
import { AsuserlistComponent } from './asroutingcomponent/asuserlist/asuserlist.component';
import { AscardsuccessComponent } from './supportingcomponents/ascardsuccess/ascardsuccess.component';
import { AscardsComponent } from './asroutingcomponent/ascards/ascards.component';
import { AspendingusersComponent } from './asroutingcomponent/aspendingusers/aspendingusers.component';
import { AsuserapprovemsgComponent } from './supportingcomponents/asuserapprovemsg/asuserapprovemsg.component';
import { AsuserslistreportComponent } from './supportingcomponents/asuserslistreport/asuserslistreport.component';
import { AssuppliersComponent } from './asroutingcomponent/assuppliers/assuppliers.component';
import { AsreviewcardComponent } from './asroutingcomponent/asreviewcard/asreviewcard.component';
import { MfaqComponent } from './routingcomponent/mfaq/mfaq.component';
import { MmyprofileComponent } from './routingcomponent/mmyprofile/mmyprofile.component';
import { MnotificationmatrixComponent } from './routingcomponent/mnotificationmatrix/mnotificationmatrix.component';
import { McontactusComponent } from './routingcomponent/mcontactus/mcontactus.component';
import { McardsComponent } from './routingcomponent/mcards/mcards.component';
import { MrulevalidationComponent } from './routingcomponent/mrulevalidation/mrulevalidation.component';
const routes: Routes = [
  { path: '', component: MasterComponent},
  { path: 'makeunitarypayment', component: MakeunitarypaymentComponent },
  { path: 'addunitarysupplier', component: AddunitarysupplierComponent },
  { path: 'listpayment', component: ListpaymentComponent },
  { path: 'rulevalidator', component: RulevalidatorComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'FAQ', component: FaqComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'notificationmatrix', component: NotificationmatrixComponent },
  { path: 'makebulkpayment', component: MakebulkpaymentComponent },
  { path: 'addbulksupplier', component: AddbulksuppierComponent },
  { path: 'supplierlist', component: SupplierlistComponent },
  { path: 'organisation', component: AsorganisationComponent },
  { path: 'master', component: MasterComponent },
  { path: 'asnav', component: AsnavComponent },
  { path: 'asnotification', component: AsnotificationmatrixComponent },
  { path: 'ascontactus', component: AscontactusComponent },
  { path: 'asmyprofile', component: AsmyprofileComponent },
  { path: 'asfaq', component: AsfaqComponent },
  { path: 'asapprovecard', component: AsapprovecardComponent },
  { path: 'asgrouplist', component: AsgrouplistComponent },
  { path: 'asgroupspending', component: AsgroupspendingComponent },
  { path: 'asgroupsuccessmsg', component: AsgroupsuccessmsgComponent },
  { path: 'asapproveotp2', component: AsapproveotpComponent },
  { path: 'ascardsuccess', component: AscardsuccessComponent },
  { path: 'ascards', component: AscardsComponent },
  { path: 'mfaq', component: MfaqComponent },
  { path: 'mmyprofile', component: MmyprofileComponent },
  { path: 'mnotificationmatrix', component: MnotificationmatrixComponent },
  { path: 'mcontactus', component: McontactusComponent },
  { path: 'mcards', component: McardsComponent },
  { path: 'mrulevalidation', component: MrulevalidationComponent },
  { path: 'reportname', component: ReportnameComponent },
  { path: 'suppliersreport', component: SuppliersreportComponent },
  { path: 'dashboard', component: DashboardComponent }
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsliderComponent,
    PaystatusComponent,
    DatepickerComponent,
    SupstatusComponent,
    ToppaymentComponent,
    CardactivityComponent,
    LastpaymentComponent,
    DashboardComponent,
    AddunitarysupplierComponent,
    FileuploadComponent,
    ListpaymentComponent,
    CheckboxComponent,
    FaqComponent,
    ReportnameComponent,
    MakeunitarypaymentComponent,
    PaysliderComponent,
    NavfilterComponent,
    PaycardtabComponent,
    PaginationComponent,
    PaymentreviewdetalsComponent,
    RulevalidatorComponent,
    CardsComponent,
    MyprofileComponent,
    ContactusComponent,
    NotificationmatrixComponent,
    MakebulkpaymentComponent,
    PaymentreviewuploadedfileComponent,
    SelectcardComponent,
    AddbulksuppierComponent,
    SupplierreviewdetailsComponent,
    SupplierlistComponent,
    SuppliersreportComponent,
    SelectcarddetailsComponent,
    MakernavigationComponent,
    AsnavComponent,
    AsorganisationComponent,
    MasterComponent,
    AsnotificationmatrixComponent,
    AscontactusComponent,
    AsmyprofileComponent,
    AsfaqComponent,
    AsapprovecardComponent,
    AsgrouplistComponent,
    AsgroupspendingComponent,
    AsgroupsuccessmsgComponent,
    AsviewrulesComponent,
    AsrulevalidationComponent,
    AsrulesucessmsgComponent,
    AsapproveotpComponent,
    AsuserlistComponent,
    AscardsuccessComponent,
    AscardsComponent,
    AspendingusersComponent,
    AsuserapprovemsgComponent,
    AsuserslistreportComponent,
    AssuppliersComponent,
    AsreviewcardComponent,
    MfaqComponent,
    MmyprofileComponent,
    MnotificationmatrixComponent,
    McontactusComponent,
    McardsComponent,
    MrulevalidationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }