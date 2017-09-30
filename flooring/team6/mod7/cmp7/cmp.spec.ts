
import { Cmp5677Component } from './cmp';
describe('Cmp5677Component', () => {
  it('should add', () => {
    expect(new Cmp5677Component().add5677(1)).toBe(5678);
  });
});