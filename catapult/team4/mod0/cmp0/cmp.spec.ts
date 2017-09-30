
import { Cmp2400Component } from './cmp';
describe('Cmp2400Component', () => {
  it('should add', () => {
    expect(new Cmp2400Component().add2400(1)).toBe(2401);
  });
});