
import { Cmp9322Component } from './cmp';
describe('Cmp9322Component', () => {
  it('should add', () => {
    expect(new Cmp9322Component().add9322(1)).toBe(9323);
  });
});