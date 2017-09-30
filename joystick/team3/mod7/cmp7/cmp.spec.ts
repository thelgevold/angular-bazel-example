
import { Cmp9377Component } from './cmp';
describe('Cmp9377Component', () => {
  it('should add', () => {
    expect(new Cmp9377Component().add9377(1)).toBe(9378);
  });
});