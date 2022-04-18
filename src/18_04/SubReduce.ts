import {Reduce} from "./Reduce";

/**
 * clase SubReduce extendidia de la clase Reduce que resta los elementos del array que recibe
 */
export class SubReduce extends Reduce {
	constructor(protected lista: number[]){
		super(lista)
	}
	run(){
		this.lista.forEach(element =>{
			this.valor = this.valor - element;
		});
		return this.valor;
	}
	result(){
		console.log(`valor de subReduce:`, this.valor );
	}
    hook(){}

}