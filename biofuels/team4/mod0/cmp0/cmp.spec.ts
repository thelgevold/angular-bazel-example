
import { Cmp1400Component } from './cmp';
describe('Cmp1400Component', () => {
  it('should add', () => {
    expect(new Cmp1400Component().add1400(1)).toBe(1401);
  });
});