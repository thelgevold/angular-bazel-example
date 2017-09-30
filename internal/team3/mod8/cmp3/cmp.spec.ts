
import { Cmp8383Component } from './cmp';
describe('Cmp8383Component', () => {
  it('should add', () => {
    expect(new Cmp8383Component().add8383(1)).toBe(8384);
  });
});