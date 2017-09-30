
import { Cmp7596Component } from './cmp';
describe('Cmp7596Component', () => {
  it('should add', () => {
    expect(new Cmp7596Component().add7596(1)).toBe(7597);
  });
});