
import { Cmp8115Component } from './cmp';
describe('Cmp8115Component', () => {
  it('should add', () => {
    expect(new Cmp8115Component().add8115(1)).toBe(8116);
  });
});