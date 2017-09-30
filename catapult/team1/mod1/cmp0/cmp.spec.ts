
import { Cmp2110Component } from './cmp';
describe('Cmp2110Component', () => {
  it('should add', () => {
    expect(new Cmp2110Component().add2110(1)).toBe(2111);
  });
});