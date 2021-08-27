import data from '../src/data/ghibli/ghibli'
import moduleData from '../src/data.js';

describe('bloque de test para filtros', () => {
  it('test para filtrado por productor', () => {
 expect(moduleData.selectFilter("Hayao Miyazaki", data, "producer")).toHaveLength(4);
  });

  it('test para filtrado por director', () => {
    expect(moduleData.selectFilter("Hayao Miyazaki", data, "director")).toHaveLength(9);
     });

});

describe('bloque de test para ordenado', () => {
  it('test de ordenado alfabeticamente', () => {
  expect(moduleData.orderCards("alphabet", data)).toHaveLength(20);
  });

  it('test para ordenado por año de lanzamiento', () => {
  expect(moduleData.orderCards("year", data)).toHaveLength(20);
  });
  
  it('test para ordenado por calificación', () => {
  expect(moduleData.orderCards("preference", data)).toHaveLength(20);
  });

});

