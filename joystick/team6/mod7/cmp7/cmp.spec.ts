
import { Cmp9677Component } from './cmp';
describe('Cmp9677Component', () => {
  it('should add', () => {
    expect(new Cmp9677Component().add9677(1)).toBe(9678);
  });
});