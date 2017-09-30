
import { Cmp8331Component } from './cmp';
describe('Cmp8331Component', () => {
  it('should add', () => {
    expect(new Cmp8331Component().add8331(1)).toBe(8332);
  });
});