
import { Cmp8632Component } from './cmp';
describe('Cmp8632Component', () => {
  it('should add', () => {
    expect(new Cmp8632Component().add8632(1)).toBe(8633);
  });
});