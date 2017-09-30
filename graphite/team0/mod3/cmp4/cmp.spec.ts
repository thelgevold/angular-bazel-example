
import { Cmp6034Component } from './cmp';
describe('Cmp6034Component', () => {
  it('should add', () => {
    expect(new Cmp6034Component().add6034(1)).toBe(6035);
  });
});