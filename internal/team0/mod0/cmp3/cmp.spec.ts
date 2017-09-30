
import { Cmp8003Component } from './cmp';
describe('Cmp8003Component', () => {
  it('should add', () => {
    expect(new Cmp8003Component().add8003(1)).toBe(8004);
  });
});