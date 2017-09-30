
import { Cmp8292Component } from './cmp';
describe('Cmp8292Component', () => {
  it('should add', () => {
    expect(new Cmp8292Component().add8292(1)).toBe(8293);
  });
});