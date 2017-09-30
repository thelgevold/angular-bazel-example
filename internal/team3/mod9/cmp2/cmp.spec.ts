
import { Cmp8392Component } from './cmp';
describe('Cmp8392Component', () => {
  it('should add', () => {
    expect(new Cmp8392Component().add8392(1)).toBe(8393);
  });
});