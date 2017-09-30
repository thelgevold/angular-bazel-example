
import { Cmp8442Component } from './cmp';
describe('Cmp8442Component', () => {
  it('should add', () => {
    expect(new Cmp8442Component().add8442(1)).toBe(8443);
  });
});