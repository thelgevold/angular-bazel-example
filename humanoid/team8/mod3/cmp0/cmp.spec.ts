
import { Cmp7830Component } from './cmp';
describe('Cmp7830Component', () => {
  it('should add', () => {
    expect(new Cmp7830Component().add7830(1)).toBe(7831);
  });
});