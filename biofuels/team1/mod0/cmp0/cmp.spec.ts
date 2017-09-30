
import { Cmp1100Component } from './cmp';
describe('Cmp1100Component', () => {
  it('should add', () => {
    expect(new Cmp1100Component().add1100(1)).toBe(1101);
  });
});