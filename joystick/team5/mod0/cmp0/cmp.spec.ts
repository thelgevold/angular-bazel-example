
import { Cmp9500Component } from './cmp';
describe('Cmp9500Component', () => {
  it('should add', () => {
    expect(new Cmp9500Component().add9500(1)).toBe(9501);
  });
});