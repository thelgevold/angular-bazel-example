
import { Cmp8252Component } from './cmp';
describe('Cmp8252Component', () => {
  it('should add', () => {
    expect(new Cmp8252Component().add8252(1)).toBe(8253);
  });
});