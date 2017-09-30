
import { Cmp7810Component } from './cmp';
describe('Cmp7810Component', () => {
  it('should add', () => {
    expect(new Cmp7810Component().add7810(1)).toBe(7811);
  });
});