
import { Cmp8072Component } from './cmp';
describe('Cmp8072Component', () => {
  it('should add', () => {
    expect(new Cmp8072Component().add8072(1)).toBe(8073);
  });
});