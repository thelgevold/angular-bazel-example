
import { Cmp8628Component } from './cmp';
describe('Cmp8628Component', () => {
  it('should add', () => {
    expect(new Cmp8628Component().add8628(1)).toBe(8629);
  });
});