
import { Cmp2377Component } from './cmp';
describe('Cmp2377Component', () => {
  it('should add', () => {
    expect(new Cmp2377Component().add2377(1)).toBe(2378);
  });
});