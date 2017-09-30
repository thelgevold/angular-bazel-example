
import { Cmp2035Component } from './cmp';
describe('Cmp2035Component', () => {
  it('should add', () => {
    expect(new Cmp2035Component().add2035(1)).toBe(2036);
  });
});