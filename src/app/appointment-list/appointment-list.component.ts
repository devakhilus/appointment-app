import { Component } from '@angular/core';
import { Appoitment } from '../models/appoitment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  
  newAppoitmentTitle : string ="";
  newAppoitmentDate : Date =new Date();
  
  appointments:Appoitment[] =[]
  ngOnInit(): void {
    let savedAppComponent=localStorage.getItem("appointments")
    this.appointments=savedAppComponent ? JSON.parse(savedAppComponent) : []
  }
  addAppoitment(){
   if(this.newAppoitmentTitle.trim().length && this.newAppoitmentDate){
    let newAppoitment : Appoitment ={
      id: Date.now(),
      title:this.newAppoitmentTitle,
      date:this.newAppoitmentDate,
      
    }
    this.appointments.push(newAppoitment)
    this.newAppoitmentTitle="";
    this.newAppoitmentDate=new Date;  
    
    // alert(this.appointments.length)
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }
} 
deleteAppoitment(index:number){
  this.appointments.splice(index,1)
  localStorage.setItem("appointments",JSON.stringify(this.appointments))
}
}
