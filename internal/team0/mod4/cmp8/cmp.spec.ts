
import { Cmp8048Component } from './cmp';
describe('Cmp8048Component', () => {
  it('should add', () => {
    expect(new Cmp8048Component().add8048(1)).toBe(8049);
  });
});