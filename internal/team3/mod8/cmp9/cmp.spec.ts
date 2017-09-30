
import { Cmp8389Component } from './cmp';
describe('Cmp8389Component', () => {
  it('should add', () => {
    expect(new Cmp8389Component().add8389(1)).toBe(8390);
  });
});