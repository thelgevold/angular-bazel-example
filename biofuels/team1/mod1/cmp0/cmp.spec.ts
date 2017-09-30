
import { Cmp1110Component } from './cmp';
describe('Cmp1110Component', () => {
  it('should add', () => {
    expect(new Cmp1110Component().add1110(1)).toBe(1111);
  });
});