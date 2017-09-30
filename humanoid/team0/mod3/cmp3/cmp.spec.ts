
import { Cmp7033Component } from './cmp';
describe('Cmp7033Component', () => {
  it('should add', () => {
    expect(new Cmp7033Component().add7033(1)).toBe(7034);
  });
});