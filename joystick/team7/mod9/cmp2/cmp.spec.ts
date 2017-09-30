
import { Cmp9792Component } from './cmp';
describe('Cmp9792Component', () => {
  it('should add', () => {
    expect(new Cmp9792Component().add9792(1)).toBe(9793);
  });
});