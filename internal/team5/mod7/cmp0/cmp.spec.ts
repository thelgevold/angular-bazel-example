
import { Cmp8570Component } from './cmp';
describe('Cmp8570Component', () => {
  it('should add', () => {
    expect(new Cmp8570Component().add8570(1)).toBe(8571);
  });
});