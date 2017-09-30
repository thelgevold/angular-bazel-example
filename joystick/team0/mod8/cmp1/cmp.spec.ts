
import { Cmp9081Component } from './cmp';
describe('Cmp9081Component', () => {
  it('should add', () => {
    expect(new Cmp9081Component().add9081(1)).toBe(9082);
  });
});