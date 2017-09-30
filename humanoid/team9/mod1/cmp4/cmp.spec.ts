
import { Cmp7914Component } from './cmp';
describe('Cmp7914Component', () => {
  it('should add', () => {
    expect(new Cmp7914Component().add7914(1)).toBe(7915);
  });
});