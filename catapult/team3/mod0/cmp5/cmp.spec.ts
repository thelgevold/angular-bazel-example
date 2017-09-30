
import { Cmp2305Component } from './cmp';
describe('Cmp2305Component', () => {
  it('should add', () => {
    expect(new Cmp2305Component().add2305(1)).toBe(2306);
  });
});