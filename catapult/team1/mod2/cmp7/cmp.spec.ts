
import { Cmp2127Component } from './cmp';
describe('Cmp2127Component', () => {
  it('should add', () => {
    expect(new Cmp2127Component().add2127(1)).toBe(2128);
  });
});