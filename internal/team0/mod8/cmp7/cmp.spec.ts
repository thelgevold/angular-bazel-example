
import { Cmp8087Component } from './cmp';
describe('Cmp8087Component', () => {
  it('should add', () => {
    expect(new Cmp8087Component().add8087(1)).toBe(8088);
  });
});