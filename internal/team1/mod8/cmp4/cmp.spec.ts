
import { Cmp8184Component } from './cmp';
describe('Cmp8184Component', () => {
  it('should add', () => {
    expect(new Cmp8184Component().add8184(1)).toBe(8185);
  });
});