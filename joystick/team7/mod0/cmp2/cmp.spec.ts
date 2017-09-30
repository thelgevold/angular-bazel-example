
import { Cmp9702Component } from './cmp';
describe('Cmp9702Component', () => {
  it('should add', () => {
    expect(new Cmp9702Component().add9702(1)).toBe(9703);
  });
});