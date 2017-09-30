
import { Cmp9139Component } from './cmp';
describe('Cmp9139Component', () => {
  it('should add', () => {
    expect(new Cmp9139Component().add9139(1)).toBe(9140);
  });
});