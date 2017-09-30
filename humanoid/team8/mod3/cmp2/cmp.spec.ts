
import { Cmp7832Component } from './cmp';
describe('Cmp7832Component', () => {
  it('should add', () => {
    expect(new Cmp7832Component().add7832(1)).toBe(7833);
  });
});