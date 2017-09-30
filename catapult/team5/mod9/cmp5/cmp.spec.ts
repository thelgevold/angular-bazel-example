
import { Cmp2595Component } from './cmp';
describe('Cmp2595Component', () => {
  it('should add', () => {
    expect(new Cmp2595Component().add2595(1)).toBe(2596);
  });
});