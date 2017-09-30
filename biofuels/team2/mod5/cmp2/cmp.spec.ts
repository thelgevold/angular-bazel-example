
import { Cmp1252Component } from './cmp';
describe('Cmp1252Component', () => {
  it('should add', () => {
    expect(new Cmp1252Component().add1252(1)).toBe(1253);
  });
});