
import { Cmp4377Component } from './cmp';
describe('Cmp4377Component', () => {
  it('should add', () => {
    expect(new Cmp4377Component().add4377(1)).toBe(4378);
  });
});