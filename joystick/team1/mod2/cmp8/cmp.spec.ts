
import { Cmp9128Component } from './cmp';
describe('Cmp9128Component', () => {
  it('should add', () => {
    expect(new Cmp9128Component().add9128(1)).toBe(9129);
  });
});