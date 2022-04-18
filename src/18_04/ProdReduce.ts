import {Reduce} from "./Reduce";

/**
 * clase ProdReduce extendidia de la clase Reduce que multiplica los elementos del array que recibe
 */
export class ProdReduce extends Reduce {
	constructor(protected lista: number[]){
		super(lista)
	}
	run(){
		this.valor = this.lista[0];
		
		for(let i: number = 1; i < this.lista.length; i++){
			this.valor = this.valor * this.lista[i];
			
		}
		
		
		return this.valor;
	}
	result(){
		console.log(`valor de ProdReduce:`, this.valor );
	}
     hook(){}

}