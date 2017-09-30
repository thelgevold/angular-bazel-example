
import { Cmp9093Component } from './cmp';
describe('Cmp9093Component', () => {
  it('should add', () => {
    expect(new Cmp9093Component().add9093(1)).toBe(9094);
  });
});