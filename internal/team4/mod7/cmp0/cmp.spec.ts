
import { Cmp8470Component } from './cmp';
describe('Cmp8470Component', () => {
  it('should add', () => {
    expect(new Cmp8470Component().add8470(1)).toBe(8471);
  });
});