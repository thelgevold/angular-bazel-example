
import { Cmp7225Component } from './cmp';
describe('Cmp7225Component', () => {
  it('should add', () => {
    expect(new Cmp7225Component().add7225(1)).toBe(7226);
  });
});