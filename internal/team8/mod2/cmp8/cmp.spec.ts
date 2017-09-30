
import { Cmp8828Component } from './cmp';
describe('Cmp8828Component', () => {
  it('should add', () => {
    expect(new Cmp8828Component().add8828(1)).toBe(8829);
  });
});