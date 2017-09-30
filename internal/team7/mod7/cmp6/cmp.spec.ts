
import { Cmp8776Component } from './cmp';
describe('Cmp8776Component', () => {
  it('should add', () => {
    expect(new Cmp8776Component().add8776(1)).toBe(8777);
  });
});