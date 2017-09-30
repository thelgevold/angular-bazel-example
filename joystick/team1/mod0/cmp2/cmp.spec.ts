
import { Cmp9102Component } from './cmp';
describe('Cmp9102Component', () => {
  it('should add', () => {
    expect(new Cmp9102Component().add9102(1)).toBe(9103);
  });
});