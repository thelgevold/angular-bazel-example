
import { Cmp5597Component } from './cmp';
describe('Cmp5597Component', () => {
  it('should add', () => {
    expect(new Cmp5597Component().add5597(1)).toBe(5598);
  });
});