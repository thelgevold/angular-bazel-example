
import { Cmp8752Component } from './cmp';
describe('Cmp8752Component', () => {
  it('should add', () => {
    expect(new Cmp8752Component().add8752(1)).toBe(8753);
  });
});