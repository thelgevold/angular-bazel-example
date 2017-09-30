
import { Cmp5988Component } from './cmp';
describe('Cmp5988Component', () => {
  it('should add', () => {
    expect(new Cmp5988Component().add5988(1)).toBe(5989);
  });
});