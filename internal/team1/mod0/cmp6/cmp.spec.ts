
import { Cmp8106Component } from './cmp';
describe('Cmp8106Component', () => {
  it('should add', () => {
    expect(new Cmp8106Component().add8106(1)).toBe(8107);
  });
});