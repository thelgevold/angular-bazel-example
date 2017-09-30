
import { Cmp9808Component } from './cmp';
describe('Cmp9808Component', () => {
  it('should add', () => {
    expect(new Cmp9808Component().add9808(1)).toBe(9809);
  });
});