
import { Cmp9712Component } from './cmp';
describe('Cmp9712Component', () => {
  it('should add', () => {
    expect(new Cmp9712Component().add9712(1)).toBe(9713);
  });
});