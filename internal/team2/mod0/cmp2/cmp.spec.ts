
import { Cmp8202Component } from './cmp';
describe('Cmp8202Component', () => {
  it('should add', () => {
    expect(new Cmp8202Component().add8202(1)).toBe(8203);
  });
});