
import { Cmp8251Component } from './cmp';
describe('Cmp8251Component', () => {
  it('should add', () => {
    expect(new Cmp8251Component().add8251(1)).toBe(8252);
  });
});