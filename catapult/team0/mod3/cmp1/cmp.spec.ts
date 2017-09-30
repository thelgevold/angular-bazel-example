
import { Cmp2031Component } from './cmp';
describe('Cmp2031Component', () => {
  it('should add', () => {
    expect(new Cmp2031Component().add2031(1)).toBe(2032);
  });
});