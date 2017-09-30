
import { Cmp8136Component } from './cmp';
describe('Cmp8136Component', () => {
  it('should add', () => {
    expect(new Cmp8136Component().add8136(1)).toBe(8137);
  });
});