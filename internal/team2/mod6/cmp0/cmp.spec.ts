
import { Cmp8260Component } from './cmp';
describe('Cmp8260Component', () => {
  it('should add', () => {
    expect(new Cmp8260Component().add8260(1)).toBe(8261);
  });
});