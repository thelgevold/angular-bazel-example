
import { Cmp8150Component } from './cmp';
describe('Cmp8150Component', () => {
  it('should add', () => {
    expect(new Cmp8150Component().add8150(1)).toBe(8151);
  });
});