
import { Cmp8460Component } from './cmp';
describe('Cmp8460Component', () => {
  it('should add', () => {
    expect(new Cmp8460Component().add8460(1)).toBe(8461);
  });
});