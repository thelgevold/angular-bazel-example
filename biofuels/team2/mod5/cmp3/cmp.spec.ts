
import { Cmp1253Component } from './cmp';
describe('Cmp1253Component', () => {
  it('should add', () => {
    expect(new Cmp1253Component().add1253(1)).toBe(1254);
  });
});