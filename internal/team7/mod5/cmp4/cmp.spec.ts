
import { Cmp8754Component } from './cmp';
describe('Cmp8754Component', () => {
  it('should add', () => {
    expect(new Cmp8754Component().add8754(1)).toBe(8755);
  });
});