
import { Cmp2192Component } from './cmp';
describe('Cmp2192Component', () => {
  it('should add', () => {
    expect(new Cmp2192Component().add2192(1)).toBe(2193);
  });
});