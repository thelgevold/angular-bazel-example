
import { Cmp9299Component } from './cmp';
describe('Cmp9299Component', () => {
  it('should add', () => {
    expect(new Cmp9299Component().add9299(1)).toBe(9300);
  });
});