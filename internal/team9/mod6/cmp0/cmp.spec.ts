
import { Cmp8960Component } from './cmp';
describe('Cmp8960Component', () => {
  it('should add', () => {
    expect(new Cmp8960Component().add8960(1)).toBe(8961);
  });
});