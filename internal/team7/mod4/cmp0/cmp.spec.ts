
import { Cmp8740Component } from './cmp';
describe('Cmp8740Component', () => {
  it('should add', () => {
    expect(new Cmp8740Component().add8740(1)).toBe(8741);
  });
});