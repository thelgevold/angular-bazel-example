
import { Cmp1275Component } from './cmp';
describe('Cmp1275Component', () => {
  it('should add', () => {
    expect(new Cmp1275Component().add1275(1)).toBe(1276);
  });
});