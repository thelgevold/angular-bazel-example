
import { Cmp2012Component } from './cmp';
describe('Cmp2012Component', () => {
  it('should add', () => {
    expect(new Cmp2012Component().add2012(1)).toBe(2013);
  });
});