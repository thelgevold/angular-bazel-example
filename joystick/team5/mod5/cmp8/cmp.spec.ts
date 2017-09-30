
import { Cmp9558Component } from './cmp';
describe('Cmp9558Component', () => {
  it('should add', () => {
    expect(new Cmp9558Component().add9558(1)).toBe(9559);
  });
});