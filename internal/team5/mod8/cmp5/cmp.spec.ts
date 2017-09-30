
import { Cmp8585Component } from './cmp';
describe('Cmp8585Component', () => {
  it('should add', () => {
    expect(new Cmp8585Component().add8585(1)).toBe(8586);
  });
});