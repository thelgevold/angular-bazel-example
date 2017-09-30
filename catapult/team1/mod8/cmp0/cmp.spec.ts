
import { Cmp2180Component } from './cmp';
describe('Cmp2180Component', () => {
  it('should add', () => {
    expect(new Cmp2180Component().add2180(1)).toBe(2181);
  });
});