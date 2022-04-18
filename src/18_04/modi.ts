import {Reduce} from "./Reduce";
import {AddReduce} from "./Addreduce";
import {SubReduce} from "./SubReduce";
import {ProdReduce} from "./ProdReduce";

/**
 * Método que ejecuta los metodos run y result de un objeto de la clase Reduce
 * @param reduce objeto de la clase Reduce
 */
export function clientCodes(reduce: Reduce) {
	reduce.run()
	reduce.result();
}
clientCodes(new SubReduce([1,2,3,4,5]));
clientCodes(new AddReduce([1,2,3,4,5]));
clientCodes(new ProdReduce([1,2,3,4,5]));