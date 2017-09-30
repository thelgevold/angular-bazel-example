
import { Cmp8829Component } from './cmp';
describe('Cmp8829Component', () => {
  it('should add', () => {
    expect(new Cmp8829Component().add8829(1)).toBe(8830);
  });
});