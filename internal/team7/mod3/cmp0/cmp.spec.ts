
import { Cmp8730Component } from './cmp';
describe('Cmp8730Component', () => {
  it('should add', () => {
    expect(new Cmp8730Component().add8730(1)).toBe(8731);
  });
});