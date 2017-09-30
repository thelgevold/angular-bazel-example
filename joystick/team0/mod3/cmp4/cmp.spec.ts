
import { Cmp9034Component } from './cmp';
describe('Cmp9034Component', () => {
  it('should add', () => {
    expect(new Cmp9034Component().add9034(1)).toBe(9035);
  });
});