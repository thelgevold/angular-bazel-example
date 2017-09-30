
import { Cmp9320Component } from './cmp';
describe('Cmp9320Component', () => {
  it('should add', () => {
    expect(new Cmp9320Component().add9320(1)).toBe(9321);
  });
});