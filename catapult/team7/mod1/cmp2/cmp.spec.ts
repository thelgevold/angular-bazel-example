
import { Cmp2712Component } from './cmp';
describe('Cmp2712Component', () => {
  it('should add', () => {
    expect(new Cmp2712Component().add2712(1)).toBe(2713);
  });
});