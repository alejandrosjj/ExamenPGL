import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Empleado } from 'src/app/interfaces/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.page.html',
  styleUrls: ['./lista-empleados.page.scss'],
})
export class ListaEmpleadosPage implements OnInit {

  listEmpleados: Empleado[] = [];
  constructor(private empleadoService: EmpleadoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getEmpleados();
  }


  getEmpleados() {
    this.empleadoService.getEmmpleados().subscribe((data: Empleado[]) => {
      this.listEmpleados = data;
    })
  }

  deleteEmpleado(id: number) {
    this.empleadoService.deleteEmpleado(id).subscribe(() =>{
      this.getEmpleados();
      this.toastr.warning('El empleado fue eliminado con exito de la base de datos', 'Empleado borrado')
    })
  }

  search(event) {
    
  }

}
