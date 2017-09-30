
import { Cmp7677Component } from './cmp';
describe('Cmp7677Component', () => {
  it('should add', () => {
    expect(new Cmp7677Component().add7677(1)).toBe(7678);
  });
});