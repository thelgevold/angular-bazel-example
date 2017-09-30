
import { Cmp8240Component } from './cmp';
describe('Cmp8240Component', () => {
  it('should add', () => {
    expect(new Cmp8240Component().add8240(1)).toBe(8241);
  });
});