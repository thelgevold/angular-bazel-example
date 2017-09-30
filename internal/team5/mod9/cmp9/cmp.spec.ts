
import { Cmp8599Component } from './cmp';
describe('Cmp8599Component', () => {
  it('should add', () => {
    expect(new Cmp8599Component().add8599(1)).toBe(8600);
  });
});