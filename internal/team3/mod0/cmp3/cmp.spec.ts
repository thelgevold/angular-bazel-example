
import { Cmp8303Component } from './cmp';
describe('Cmp8303Component', () => {
  it('should add', () => {
    expect(new Cmp8303Component().add8303(1)).toBe(8304);
  });
});