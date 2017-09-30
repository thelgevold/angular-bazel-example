
import { Cmp8584Component } from './cmp';
describe('Cmp8584Component', () => {
  it('should add', () => {
    expect(new Cmp8584Component().add8584(1)).toBe(8585);
  });
});