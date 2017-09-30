
import { Cmp8588Component } from './cmp';
describe('Cmp8588Component', () => {
  it('should add', () => {
    expect(new Cmp8588Component().add8588(1)).toBe(8589);
  });
});