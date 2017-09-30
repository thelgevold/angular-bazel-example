
import { Cmp7048Component } from './cmp';
describe('Cmp7048Component', () => {
  it('should add', () => {
    expect(new Cmp7048Component().add7048(1)).toBe(7049);
  });
});