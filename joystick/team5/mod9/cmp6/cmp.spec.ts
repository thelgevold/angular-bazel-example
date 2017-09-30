
import { Cmp9596Component } from './cmp';
describe('Cmp9596Component', () => {
  it('should add', () => {
    expect(new Cmp9596Component().add9596(1)).toBe(9597);
  });
});