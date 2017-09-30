
import { Cmp2011Component } from './cmp';
describe('Cmp2011Component', () => {
  it('should add', () => {
    expect(new Cmp2011Component().add2011(1)).toBe(2012);
  });
});