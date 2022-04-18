import {Reduce} from "./Reduce";

/**
 * clase AddReduce extendidia de la clase Reduce que suma los elementos del array que recibe
 */
export class AddReduce extends Reduce {
	constructor(protected lista: number[]){
		super(lista)
	}
	run(){
		this.lista.forEach(element =>{
			this.valor = this.valor + element;
		});
		return this.valor;
	}
	result(){
		console.log(`valor de AddReduce:`, this.valor );

	}
    hook(){}
}