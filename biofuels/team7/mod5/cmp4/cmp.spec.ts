
import { Cmp1754Component } from './cmp';
describe('Cmp1754Component', () => {
  it('should add', () => {
    expect(new Cmp1754Component().add1754(1)).toBe(1755);
  });
});