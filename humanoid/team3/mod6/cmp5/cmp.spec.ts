
import { Cmp7365Component } from './cmp';
describe('Cmp7365Component', () => {
  it('should add', () => {
    expect(new Cmp7365Component().add7365(1)).toBe(7366);
  });
});