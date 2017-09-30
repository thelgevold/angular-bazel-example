
import { Cmp9279Component } from './cmp';
describe('Cmp9279Component', () => {
  it('should add', () => {
    expect(new Cmp9279Component().add9279(1)).toBe(9280);
  });
});