
import { Cmp9033Component } from './cmp';
describe('Cmp9033Component', () => {
  it('should add', () => {
    expect(new Cmp9033Component().add9033(1)).toBe(9034);
  });
});