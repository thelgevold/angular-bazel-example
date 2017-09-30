
import { Cmp7132Component } from './cmp';
describe('Cmp7132Component', () => {
  it('should add', () => {
    expect(new Cmp7132Component().add7132(1)).toBe(7133);
  });
});