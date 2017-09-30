
import { Cmp5377Component } from './cmp';
describe('Cmp5377Component', () => {
  it('should add', () => {
    expect(new Cmp5377Component().add5377(1)).toBe(5378);
  });
});