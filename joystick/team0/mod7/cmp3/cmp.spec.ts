
import { Cmp9073Component } from './cmp';
describe('Cmp9073Component', () => {
  it('should add', () => {
    expect(new Cmp9073Component().add9073(1)).toBe(9074);
  });
});