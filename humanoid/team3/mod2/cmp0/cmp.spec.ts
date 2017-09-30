
import { Cmp7320Component } from './cmp';
describe('Cmp7320Component', () => {
  it('should add', () => {
    expect(new Cmp7320Component().add7320(1)).toBe(7321);
  });
});