
import { Cmp1298Component } from './cmp';
describe('Cmp1298Component', () => {
  it('should add', () => {
    expect(new Cmp1298Component().add1298(1)).toBe(1299);
  });
});