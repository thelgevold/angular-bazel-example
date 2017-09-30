
import { Cmp9080Component } from './cmp';
describe('Cmp9080Component', () => {
  it('should add', () => {
    expect(new Cmp9080Component().add9080(1)).toBe(9081);
  });
});