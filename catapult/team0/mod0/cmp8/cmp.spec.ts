
import { Cmp2008Component } from './cmp';
describe('Cmp2008Component', () => {
  it('should add', () => {
    expect(new Cmp2008Component().add2008(1)).toBe(2009);
  });
});