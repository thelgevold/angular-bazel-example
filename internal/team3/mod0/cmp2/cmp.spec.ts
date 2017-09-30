
import { Cmp8302Component } from './cmp';
describe('Cmp8302Component', () => {
  it('should add', () => {
    expect(new Cmp8302Component().add8302(1)).toBe(8303);
  });
});