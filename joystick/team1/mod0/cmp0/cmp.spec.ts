
import { Cmp9100Component } from './cmp';
describe('Cmp9100Component', () => {
  it('should add', () => {
    expect(new Cmp9100Component().add9100(1)).toBe(9101);
  });
});