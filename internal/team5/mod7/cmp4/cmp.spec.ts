
import { Cmp8574Component } from './cmp';
describe('Cmp8574Component', () => {
  it('should add', () => {
    expect(new Cmp8574Component().add8574(1)).toBe(8575);
  });
});