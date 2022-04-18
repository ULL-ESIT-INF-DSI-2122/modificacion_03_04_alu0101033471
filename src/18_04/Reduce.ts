/**
 * Clase abscartac Reduce que se extenderá en las siguientes
 * recibe en su constructor un array de number
 */
export abstract class Reduce {
		protected valor: number;
    constructor(protected lista: number[]) {
			this.valor = 0;
			
		}
		abstract run():number;
		abstract result(): void;
		public hook():void{
		
		};
}




