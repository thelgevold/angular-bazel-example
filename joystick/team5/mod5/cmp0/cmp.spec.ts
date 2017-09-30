
import { Cmp9550Component } from './cmp';
describe('Cmp9550Component', () => {
  it('should add', () => {
    expect(new Cmp9550Component().add9550(1)).toBe(9551);
  });
});