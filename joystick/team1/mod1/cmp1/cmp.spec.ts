
import { Cmp9111Component } from './cmp';
describe('Cmp9111Component', () => {
  it('should add', () => {
    expect(new Cmp9111Component().add9111(1)).toBe(9112);
  });
});