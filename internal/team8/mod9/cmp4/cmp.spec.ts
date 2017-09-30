
import { Cmp8894Component } from './cmp';
describe('Cmp8894Component', () => {
  it('should add', () => {
    expect(new Cmp8894Component().add8894(1)).toBe(8895);
  });
});