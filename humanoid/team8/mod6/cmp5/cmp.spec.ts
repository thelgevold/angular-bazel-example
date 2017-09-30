
import { Cmp7865Component } from './cmp';
describe('Cmp7865Component', () => {
  it('should add', () => {
    expect(new Cmp7865Component().add7865(1)).toBe(7866);
  });
});