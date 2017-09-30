
import { Cmp8417Component } from './cmp';
describe('Cmp8417Component', () => {
  it('should add', () => {
    expect(new Cmp8417Component().add8417(1)).toBe(8418);
  });
});