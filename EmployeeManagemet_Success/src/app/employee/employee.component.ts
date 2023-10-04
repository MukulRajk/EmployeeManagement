/* employee.component.ts  */


import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeForm! : FormGroup;
  employees: any[] = [];

  editingEmployee: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
    
    ) {
      this.employeeForm = this.formBuilder.group({
        // Define your form controls here
      });

    }

  ngOnInit() {
    // Initialize the employeeForm FormGroup with form controls and validators
    this.employeeForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z]*$/), Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-Z]*$/), Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: [''],
      address: ['']
    });
    this.loadEmployees();

  }

  editEmployee(employee: any) {
    // Set the editingEmployee to the selected employee for editing
    this.editingEmployee = { ...employee };
  }

  cancelEdit() {
    // Cancel the editing mode
    this.editingEmployee = null;
  }

  updateEmployee() {
    if (this.editingEmployee) {
      // Use the EmployeeService to update the employee
      this.employeeService
        .updateEmployee(this.editingEmployee.id, this.editingEmployee)
        .subscribe((response) => {
          // Update the employee list and exit edit mode
          this.loadEmployees();
          this.cancelEdit();
        });
    }
  }


  deleteEmployee(employeeId: number) {
    // Use the EmployeeService to delete the employee
    this.employeeService.deleteEmployee(employeeId).subscribe(() => {
      // Update the employee list after deletion
      this.loadEmployees();
    });
  }



  onSubmit() {
    // Handle form submission here
    if (this.employeeForm.valid) {
      // The form is valid, proceed with data submission
      const formData = this.employeeForm.value;
      // Send formData to your API or service for further processing
      console.log(formData);

      // Add employee data using the EmployeeService
      this.employeeService.addEmployee(formData).subscribe((response) => {
        this.loadEmployees(); // Reload employee records after submission
        this.employeeForm.reset(); // Reset the form
      });

    } else {
      // Form is invalid, display error messages and prevent submission
      // You can mark all form controls as touched to trigger error messages
      this.markFormGroupTouched(this.employeeForm);
    }
  }


  loadEmployees() {
    // Load employee records using the EmployeeService
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }


  markFormGroupTouched(formGroup: FormGroup) {
    // Mark all form controls in the group as touched to trigger error messages
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control.markAsTouched();
      }
    });
  }
}
