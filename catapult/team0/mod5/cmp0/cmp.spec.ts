
import { Cmp2050Component } from './cmp';
describe('Cmp2050Component', () => {
  it('should add', () => {
    expect(new Cmp2050Component().add2050(1)).toBe(2051);
  });
});