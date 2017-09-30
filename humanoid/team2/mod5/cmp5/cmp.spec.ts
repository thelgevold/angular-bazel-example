
import { Cmp7255Component } from './cmp';
describe('Cmp7255Component', () => {
  it('should add', () => {
    expect(new Cmp7255Component().add7255(1)).toBe(7256);
  });
});