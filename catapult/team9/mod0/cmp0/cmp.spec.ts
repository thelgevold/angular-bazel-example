
import { Cmp2900Component } from './cmp';
describe('Cmp2900Component', () => {
  it('should add', () => {
    expect(new Cmp2900Component().add2900(1)).toBe(2901);
  });
});