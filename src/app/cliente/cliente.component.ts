import { Component, OnInit } from '@angular/core';
import { Cliente } from '../domain/cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

    clientes: Cliente[];

  constructor(private clienteService: ClienteService) { 
    this.getClientes();
  }

  ngOnInit() {
  }

  getClientes(){
    this.clienteService.getClientes()
    .subscribe(response => {
      this.clientes = response;
      console.log(response);
    })
  }
}
