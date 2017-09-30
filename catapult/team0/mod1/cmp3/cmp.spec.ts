
import { Cmp2013Component } from './cmp';
describe('Cmp2013Component', () => {
  it('should add', () => {
    expect(new Cmp2013Component().add2013(1)).toBe(2014);
  });
});