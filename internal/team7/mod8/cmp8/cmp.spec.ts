
import { Cmp8788Component } from './cmp';
describe('Cmp8788Component', () => {
  it('should add', () => {
    expect(new Cmp8788Component().add8788(1)).toBe(8789);
  });
});