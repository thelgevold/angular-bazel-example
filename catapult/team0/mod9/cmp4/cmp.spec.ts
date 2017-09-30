
import { Cmp2094Component } from './cmp';
describe('Cmp2094Component', () => {
  it('should add', () => {
    expect(new Cmp2094Component().add2094(1)).toBe(2095);
  });
});