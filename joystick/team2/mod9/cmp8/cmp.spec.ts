
import { Cmp9298Component } from './cmp';
describe('Cmp9298Component', () => {
  it('should add', () => {
    expect(new Cmp9298Component().add9298(1)).toBe(9299);
  });
});