import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.page.html',
  styleUrls: ['./add-empleado.page.scss'],
})
export class AddEmpleadoPage implements OnInit {
  
  formGroup: FormGroup;
  id: number;
  operacion: string = 'Contratar '
  constructor(public formBuilder: FormBuilder, private empleadoService: EmpleadoService, 
    private toastr: ToastrService, private router: Router,
    private aRouter: ActivatedRoute) { 

    this.formGroup = formBuilder.group({
      nameNameControl: [
        "",
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(30),
          Validators.pattern("[0-9a-z-A-Z-_ ]*"),
          Validators.required
        ])
      ],
      apellido1Control: [
        "",
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(70),
          Validators.pattern("[0-9a-z-A-Z-_ ]*"),
          Validators.required
        ])
      ],
      apellido2Control: [
        "",
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(70),
          Validators.pattern("[0-9a-z-A-Z-_ ]*"),
          Validators.required
        ])
      ],


      rangoControl: [
        "",
        Validators.compose([
          Validators.minLength(4),
          Validators.maxLength(70),
          Validators.pattern("[0-9a-z-A-Z-_ ]*"),
          Validators.required
        ])
      ],

      sueldoControl: [
        "",
        Validators.compose([
          Validators.required
        ])
      ],

      telefonoControl: [
        "",
        Validators.compose([
          Validators.maxLength(9),
          Validators.required
        ])
      ],
    });

    this.id = Number(aRouter.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {

    if (this.id!=0) {
      //Editar
      this.operacion = 'Actualizar registro '
      this.getEmpleado(this.id);
    }

  }

  agregarEmpleado(){

  const empleado: Empleado = {
      name: this.formGroup.value.nameNameControl,
      apellido1: this.formGroup.value.apellido1Control,
      apellido2: this.formGroup.value.apellido2Control,
      rango: this.formGroup.value.rangoControl,
      sueldo: this.formGroup.value.sueldoControl,
      telefono: this.formGroup.value.telefonoControl
    }

    if(this.id !=0){
      //Es editar
      empleado.id = this.id;
      this.empleadoService.updateEmpleado(this.id, empleado).subscribe(() => {
        this.toastr.success('Empleado actualizado correctamente')
        this.router.navigate(['/tab-inicial/lista-empleados'])
        
      })
      
    } else {
      //Es agregar

      this.empleadoService.saveEmpleado(empleado).subscribe(() => {
        console.log('Producto agregado')
        this.toastr.success('Empleado agregado correctamente')
        this.router.navigate(['/tab-inicial/lista-empleados'])
      })
    }
  }


  getEmpleado(id: number){
    this.empleadoService.getEmpleado(id).subscribe((data:Empleado) =>{
      console.log(data)

      this.formGroup.patchValue({
        nameNameControl: data.name,
        apellido1Control: data.apellido1,
        apellido2Control: data.apellido2,
        rangoControl: data.rango,
        sueldoControl: data.sueldo,
        telefonoControl: data.telefono
      })


    })
  }

}
