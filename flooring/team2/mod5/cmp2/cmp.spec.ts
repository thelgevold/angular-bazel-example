
import { Cmp5252Component } from './cmp';
describe('Cmp5252Component', () => {
  it('should add', () => {
    expect(new Cmp5252Component().add5252(1)).toBe(5253);
  });
});