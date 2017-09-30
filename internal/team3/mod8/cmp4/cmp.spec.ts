
import { Cmp8384Component } from './cmp';
describe('Cmp8384Component', () => {
  it('should add', () => {
    expect(new Cmp8384Component().add8384(1)).toBe(8385);
  });
});