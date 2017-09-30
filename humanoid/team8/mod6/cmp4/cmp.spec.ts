
import { Cmp7864Component } from './cmp';
describe('Cmp7864Component', () => {
  it('should add', () => {
    expect(new Cmp7864Component().add7864(1)).toBe(7865);
  });
});