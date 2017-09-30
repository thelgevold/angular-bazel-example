
import { Cmp9605Component } from './cmp';
describe('Cmp9605Component', () => {
  it('should add', () => {
    expect(new Cmp9605Component().add9605(1)).toBe(9606);
  });
});