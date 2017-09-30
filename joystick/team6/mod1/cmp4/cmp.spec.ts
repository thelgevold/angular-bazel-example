
import { Cmp9614Component } from './cmp';
describe('Cmp9614Component', () => {
  it('should add', () => {
    expect(new Cmp9614Component().add9614(1)).toBe(9615);
  });
});