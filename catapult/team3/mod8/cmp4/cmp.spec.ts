
import { Cmp2384Component } from './cmp';
describe('Cmp2384Component', () => {
  it('should add', () => {
    expect(new Cmp2384Component().add2384(1)).toBe(2385);
  });
});