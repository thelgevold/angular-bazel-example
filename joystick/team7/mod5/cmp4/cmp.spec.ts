
import { Cmp9754Component } from './cmp';
describe('Cmp9754Component', () => {
  it('should add', () => {
    expect(new Cmp9754Component().add9754(1)).toBe(9755);
  });
});