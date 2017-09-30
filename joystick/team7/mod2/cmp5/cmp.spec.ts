
import { Cmp9725Component } from './cmp';
describe('Cmp9725Component', () => {
  it('should add', () => {
    expect(new Cmp9725Component().add9725(1)).toBe(9726);
  });
});