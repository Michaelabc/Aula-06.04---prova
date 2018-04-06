import { Component, OnInit } from '@angular/core';
import { Categoria } from '../domain/categoria';
import { CategoriaService } from '../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

    categorias : Categoria[];

  constructor(private categoriaService: CategoriaService) { 
    this.getCategorias();
  }

  ngOnInit() {
  }

  getCategorias(){
    this.categoriaService.getCategorias()
    .subscribe(response => {
      this.categorias = response;
      console.log(response)
    })
  }
}
