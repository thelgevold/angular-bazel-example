
import { Cmp8623Component } from './cmp';
describe('Cmp8623Component', () => {
  it('should add', () => {
    expect(new Cmp8623Component().add8623(1)).toBe(8624);
  });
});