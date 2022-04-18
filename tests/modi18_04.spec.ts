import 'mocha';
import { expect } from 'chai';
import { clientCodes } from "../src/18_04/modi";
import {Reduce} from '../src/18_04/Reduce';
import {AddReduce} from '../src/18_04/Addreduce';
import { SubReduce } from '../src/18_04/SubReduce';
import { ProdReduce } from '../src/18_04/ProdReduce';

describe('Test clase ', () => {
    let prueba = new AddReduce([1,2,3,4,5]);
    let prueba2 = new SubReduce([1,2,3,4,5]);
    let prueba3 = new ProdReduce([1,2,3,4,5]);

    it('comprobar ', () => {
        expect( prueba instanceof AddReduce).to.eql (true);
        expect( prueba2 instanceof SubReduce).to.eql (true);
        expect( prueba3 instanceof ProdReduce).to.eql (true);
    });
    it('comprobar método run', () => {
        expect( prueba.run()).to.eql (15);
        expect( prueba2.run()).to.eql (-15);
        expect( prueba3.run()).to.eql (120);
    });
    it('comprobar método client', () => {
        //expect( clientCodes(new AddReduce([1,2,3,4,5]))).to.eql (true);
        //expect( prueba2.run()).to.eql (-15);
        //expect( prueba3.run()).to.eql (120);
    });
  });