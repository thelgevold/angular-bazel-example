
import { Cmp9032Component } from './cmp';
describe('Cmp9032Component', () => {
  it('should add', () => {
    expect(new Cmp9032Component().add9032(1)).toBe(9033);
  });
});