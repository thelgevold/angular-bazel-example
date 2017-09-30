
import { Cmp2632Component } from './cmp';
describe('Cmp2632Component', () => {
  it('should add', () => {
    expect(new Cmp2632Component().add2632(1)).toBe(2633);
  });
});