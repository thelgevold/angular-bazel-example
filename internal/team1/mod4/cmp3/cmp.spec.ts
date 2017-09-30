
import { Cmp8143Component } from './cmp';
describe('Cmp8143Component', () => {
  it('should add', () => {
    expect(new Cmp8143Component().add8143(1)).toBe(8144);
  });
});