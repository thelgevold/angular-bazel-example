
import { Cmp8133Component } from './cmp';
describe('Cmp8133Component', () => {
  it('should add', () => {
    expect(new Cmp8133Component().add8133(1)).toBe(8134);
  });
});