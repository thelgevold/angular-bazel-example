
import { Cmp8575Component } from './cmp';
describe('Cmp8575Component', () => {
  it('should add', () => {
    expect(new Cmp8575Component().add8575(1)).toBe(8576);
  });
});