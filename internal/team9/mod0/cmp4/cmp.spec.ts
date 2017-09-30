
import { Cmp8904Component } from './cmp';
describe('Cmp8904Component', () => {
  it('should add', () => {
    expect(new Cmp8904Component().add8904(1)).toBe(8905);
  });
});