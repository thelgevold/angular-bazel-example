
import { Cmp5754Component } from './cmp';
describe('Cmp5754Component', () => {
  it('should add', () => {
    expect(new Cmp5754Component().add5754(1)).toBe(5755);
  });
});