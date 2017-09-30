
import { Cmp7870Component } from './cmp';
describe('Cmp7870Component', () => {
  it('should add', () => {
    expect(new Cmp7870Component().add7870(1)).toBe(7871);
  });
});