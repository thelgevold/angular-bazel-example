
import { Cmp7279Component } from './cmp';
describe('Cmp7279Component', () => {
  it('should add', () => {
    expect(new Cmp7279Component().add7279(1)).toBe(7280);
  });
});