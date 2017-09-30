
import { Cmp9753Component } from './cmp';
describe('Cmp9753Component', () => {
  it('should add', () => {
    expect(new Cmp9753Component().add9753(1)).toBe(9754);
  });
});