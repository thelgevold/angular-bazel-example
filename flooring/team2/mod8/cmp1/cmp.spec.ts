
import { Cmp5281Component } from './cmp';
describe('Cmp5281Component', () => {
  it('should add', () => {
    expect(new Cmp5281Component().add5281(1)).toBe(5282);
  });
});