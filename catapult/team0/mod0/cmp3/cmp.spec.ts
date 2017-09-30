
import { Cmp2003Component } from './cmp';
describe('Cmp2003Component', () => {
  it('should add', () => {
    expect(new Cmp2003Component().add2003(1)).toBe(2004);
  });
});