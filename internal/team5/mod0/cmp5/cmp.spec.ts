
import { Cmp8505Component } from './cmp';
describe('Cmp8505Component', () => {
  it('should add', () => {
    expect(new Cmp8505Component().add8505(1)).toBe(8506);
  });
});