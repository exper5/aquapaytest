import { Injectable }                        from '@angular/core';

import { FormData, Personal }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
   

    constructor(private workflowService: WorkflowService) { 
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            vendorcode: this.formData.vendorcode,
            name: this.formData.name,
            email: this.formData.email,
            email1: this.formData.email1,
            email2: this.formData.email2,
            email3: this.formData.email3,
            contact: this.formData.contact,
            contact1: this.formData.contact1,
            contact2: this.formData.contact2,
            contact3: this.formData.contact3,
            accno: this.formData.accno,
            ifsc: this.formData.ifsc,
            bank: this.formData.bank,
            branch: this.formData.branch,
            notification: this.formData.notification,
            selectcheckertemp:this.formData.selectcheckertemp,
         
            
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.vendorcode = data.vendorcode;
        this.formData.name= data.name;
        this.formData.email= data.email;
        this.formData.email1= data.email1;
        this.formData.email2= data.email2;
        this.formData.email3= data.email3;
        this.formData.contact= data.contact;
        this.formData.contact1= data.contact1;
        this.formData.contact2= data.contact2;
        this.formData.contact3= data.contact3;
        this.formData.accno= data.accno;
        this.formData.ifsc= data.ifsc;
        this.formData.bank= data.bank;
        this.formData.branch= data.branch;
        this.formData.notification=data.notification;
        this.formData.selectcheckertemp=data.selectcheckertemp.toString();
        
        
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    
    
    

    

    
    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
         this.formData.clear();
        this.isPersonalFormValid  = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid;
                
    }
}