
import { Cmp8656Component } from './cmp';
describe('Cmp8656Component', () => {
  it('should add', () => {
    expect(new Cmp8656Component().add8656(1)).toBe(8657);
  });
});