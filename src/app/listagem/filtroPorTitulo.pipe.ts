import { Pipe, PipeTransform } from "@angular/core";
import { Foto } from "../foto/foto";

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform{

    transform(listaFotos: Foto[], filtro: string){

        return listaFotos.filter(
            (foto) => {

                if(foto.titulo.toLowerCase().includes(filtro.toLowerCase())){
                    return foto
                }

            }
        )
    }
}