
import { Cmp2252Component } from './cmp';
describe('Cmp2252Component', () => {
  it('should add', () => {
    expect(new Cmp2252Component().add2252(1)).toBe(2253);
  });
});