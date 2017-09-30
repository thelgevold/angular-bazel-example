
import { Cmp8795Component } from './cmp';
describe('Cmp8795Component', () => {
  it('should add', () => {
    expect(new Cmp8795Component().add8795(1)).toBe(8796);
  });
});