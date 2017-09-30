
import { Cmp9385Component } from './cmp';
describe('Cmp9385Component', () => {
  it('should add', () => {
    expect(new Cmp9385Component().add9385(1)).toBe(9386);
  });
});