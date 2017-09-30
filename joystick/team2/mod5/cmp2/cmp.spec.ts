
import { Cmp9252Component } from './cmp';
describe('Cmp9252Component', () => {
  it('should add', () => {
    expect(new Cmp9252Component().add9252(1)).toBe(9253);
  });
});