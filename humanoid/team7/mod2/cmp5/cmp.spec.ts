
import { Cmp7725Component } from './cmp';
describe('Cmp7725Component', () => {
  it('should add', () => {
    expect(new Cmp7725Component().add7725(1)).toBe(7726);
  });
});