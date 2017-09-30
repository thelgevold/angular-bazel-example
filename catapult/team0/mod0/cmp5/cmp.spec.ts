
import { Cmp2005Component } from './cmp';
describe('Cmp2005Component', () => {
  it('should add', () => {
    expect(new Cmp2005Component().add2005(1)).toBe(2006);
  });
});