
import { Cmp7093Component } from './cmp';
describe('Cmp7093Component', () => {
  it('should add', () => {
    expect(new Cmp7093Component().add7093(1)).toBe(7094);
  });
});