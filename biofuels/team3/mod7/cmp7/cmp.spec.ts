
import { Cmp1377Component } from './cmp';
describe('Cmp1377Component', () => {
  it('should add', () => {
    expect(new Cmp1377Component().add1377(1)).toBe(1378);
  });
});