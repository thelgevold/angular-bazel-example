
import { Cmp2123Component } from './cmp';
describe('Cmp2123Component', () => {
  it('should add', () => {
    expect(new Cmp2123Component().add2123(1)).toBe(2124);
  });
});