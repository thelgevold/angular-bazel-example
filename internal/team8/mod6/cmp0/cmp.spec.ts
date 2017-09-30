
import { Cmp8860Component } from './cmp';
describe('Cmp8860Component', () => {
  it('should add', () => {
    expect(new Cmp8860Component().add8860(1)).toBe(8861);
  });
});