
import { Cmp7509Component } from './cmp';
describe('Cmp7509Component', () => {
  it('should add', () => {
    expect(new Cmp7509Component().add7509(1)).toBe(7510);
  });
});