
import { Cmp9870Component } from './cmp';
describe('Cmp9870Component', () => {
  it('should add', () => {
    expect(new Cmp9870Component().add9870(1)).toBe(9871);
  });
});