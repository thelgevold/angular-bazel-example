
import { Cmp8605Component } from './cmp';
describe('Cmp8605Component', () => {
  it('should add', () => {
    expect(new Cmp8605Component().add8605(1)).toBe(8606);
  });
});