
import { Cmp8594Component } from './cmp';
describe('Cmp8594Component', () => {
  it('should add', () => {
    expect(new Cmp8594Component().add8594(1)).toBe(8595);
  });
});