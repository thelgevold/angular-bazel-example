
import { Cmp9912Component } from './cmp';
describe('Cmp9912Component', () => {
  it('should add', () => {
    expect(new Cmp9912Component().add9912(1)).toBe(9913);
  });
});