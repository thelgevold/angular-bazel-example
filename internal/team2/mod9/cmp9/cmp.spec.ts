
import { Cmp8299Component } from './cmp';
describe('Cmp8299Component', () => {
  it('should add', () => {
    expect(new Cmp8299Component().add8299(1)).toBe(8300);
  });
});