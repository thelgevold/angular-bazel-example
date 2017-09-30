
import { Cmp4870Component } from './cmp';
describe('Cmp4870Component', () => {
  it('should add', () => {
    expect(new Cmp4870Component().add4870(1)).toBe(4871);
  });
});