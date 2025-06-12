import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// import { Autor } from 'src/app/modules/gestionar-proyecciones/core/models/autor';
// import { Categoria } from 'src/app/modules/gestionar-proyecciones/core/models/categoria';
// import { Editorial } from 'src/app/modules/gestionar-proyecciones/core/models/editorial';
// import { Libro } from 'src/app/modules/gestionar-proyecciones/core/models/libro';

// import { AutorService } from '../../../../../modules/gestionar-proyecciones/core/service/autor.service';
// import { CategoriaService } from '../../../../../modules/gestionar-proyecciones/core/service/categoria.service';
// import { EditorialService } from '../../../../../modules/gestionar-proyecciones/core/service/editorial.service';
// import { LibroService } from '../../../../../modules/gestionar-proyecciones/core/service/libro.service';

@Component({
  selector: 'app-editar-reserva',
  templateUrl: './editar-reserva.component.html'
})
export class EditarReservaComponent {

//   actualizarLibro: Libro = {
//     id: 0,
//     titulo: '',
//     fecha_lanzamiento: '',
//     autorEntity: { id: 0, autor: '' },
//     categoriaEntity: { id: 0, categoria: '' },
//     editorialEntity: { id: 0, editorial: '' },
//     idioma: '',
//     paginas: '',
//     descripcion: '',
//     portada: '',
//   };


//   autores: Autor[] = [];
//   categorias: Categoria[] = [];
//   editoriales: Editorial[] = [];

  constructor(
    
    private activateRoute: ActivatedRoute
  ) {}

//   ngOnInit(): void {
//       this.getCategorias();
//       this.getEditoriales();
//       this.getAutores();
//       this.cargarLibro();
//   }

//   getAutores(){
//     this.autorService.getAutores().subscribe(
//       (autores) => {
//         this.autores = autores;
//       }
//       ,
//       (error) => {
//         console.error('Error al obtener los autores', error);
//         // Manejo de errores aquí
//       }
//     )
//   }

//   getCategorias(){
//     this.categoriaService.getCategorias().subscribe(
//       (categorias) => {
//         this.categorias = categorias;
//       },
//       (error) => {
//         console.error('Error al obtener las categorías:', error);
//         // Manejo de errores aquí
//       }
//     )
//   }

//   getEditoriales(){
//     this.editorialService.getEditoriales().subscribe(
//       (editoriales) => {
//         this.editoriales = editoriales;
//       }
//       ,
//       (error) => {
//         console.error('Error al obtener las editoriales:', error);
//         // Manejo de errores aquí
//       }
//     )
//   }

// editarLibro(){
//   this.libroService.actualizarLibro(this.actualizarLibro.id, this.actualizarLibro).subscribe(
//     (libroAgregado) => {
//       console.log('Libro actualizado correctamente:', libroAgregado);
//       // Puedes realizar acciones adicionales después de agregar el libro
//     },
//     (error) => {
//       console.error('Error al actualizar el libro:', error);
//       // Manejo de errores aquí
//     }
//   );
// }

//   cargarLibro() {
//     this.activateRoute.params.subscribe(params => {
//       let id = params['id'];
//       if (id) {
//         this.libroService.getLibro(id).subscribe(
//           (libro) => {
//             this.actualizarLibro = new Libro(
//               libro.id,
//               libro.titulo,
//               libro.fecha_lanzamiento,
//               libro.autorEntity,
//               libro.categoriaEntity,
//               libro.editorialEntity,
//               libro.idioma,
//               libro.paginas,
//               libro.descripcion,
//               libro.portada
//               )
//           },
//           (error) => {
//             console.error('Error al obtener el libro:', error);
//           }
//         );
//       }
//     });
//   }
}
