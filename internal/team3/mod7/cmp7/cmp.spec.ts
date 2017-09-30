
import { Cmp8377Component } from './cmp';
describe('Cmp8377Component', () => {
  it('should add', () => {
    expect(new Cmp8377Component().add8377(1)).toBe(8378);
  });
});