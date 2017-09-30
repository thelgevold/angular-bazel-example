
import { Cmp8988Component } from './cmp';
describe('Cmp8988Component', () => {
  it('should add', () => {
    expect(new Cmp8988Component().add8988(1)).toBe(8989);
  });
});