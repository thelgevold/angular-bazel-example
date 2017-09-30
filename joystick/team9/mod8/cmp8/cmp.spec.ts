
import { Cmp9988Component } from './cmp';
describe('Cmp9988Component', () => {
  it('should add', () => {
    expect(new Cmp9988Component().add9988(1)).toBe(9989);
  });
});