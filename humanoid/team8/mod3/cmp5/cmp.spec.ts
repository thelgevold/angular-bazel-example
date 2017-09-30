
import { Cmp7835Component } from './cmp';
describe('Cmp7835Component', () => {
  it('should add', () => {
    expect(new Cmp7835Component().add7835(1)).toBe(7836);
  });
});