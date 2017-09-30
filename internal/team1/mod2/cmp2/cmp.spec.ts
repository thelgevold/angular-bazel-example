
import { Cmp8122Component } from './cmp';
describe('Cmp8122Component', () => {
  it('should add', () => {
    expect(new Cmp8122Component().add8122(1)).toBe(8123);
  });
});