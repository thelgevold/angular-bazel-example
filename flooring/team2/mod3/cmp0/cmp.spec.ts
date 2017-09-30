
import { Cmp5230Component } from './cmp';
describe('Cmp5230Component', () => {
  it('should add', () => {
    expect(new Cmp5230Component().add5230(1)).toBe(5231);
  });
});