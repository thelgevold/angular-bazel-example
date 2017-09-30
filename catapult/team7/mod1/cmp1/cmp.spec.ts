
import { Cmp2711Component } from './cmp';
describe('Cmp2711Component', () => {
  it('should add', () => {
    expect(new Cmp2711Component().add2711(1)).toBe(2712);
  });
});