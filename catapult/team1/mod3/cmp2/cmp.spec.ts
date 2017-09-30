
import { Cmp2132Component } from './cmp';
describe('Cmp2132Component', () => {
  it('should add', () => {
    expect(new Cmp2132Component().add2132(1)).toBe(2133);
  });
});