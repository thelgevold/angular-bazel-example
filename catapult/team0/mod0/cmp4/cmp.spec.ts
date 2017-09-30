
import { Cmp2004Component } from './cmp';
describe('Cmp2004Component', () => {
  it('should add', () => {
    expect(new Cmp2004Component().add2004(1)).toBe(2005);
  });
});