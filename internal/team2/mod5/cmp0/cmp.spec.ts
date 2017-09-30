
import { Cmp8250Component } from './cmp';
describe('Cmp8250Component', () => {
  it('should add', () => {
    expect(new Cmp8250Component().add8250(1)).toBe(8251);
  });
});