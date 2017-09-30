
import { Cmp9707Component } from './cmp';
describe('Cmp9707Component', () => {
  it('should add', () => {
    expect(new Cmp9707Component().add9707(1)).toBe(9708);
  });
});