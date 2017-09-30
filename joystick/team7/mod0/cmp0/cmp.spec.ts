
import { Cmp9700Component } from './cmp';
describe('Cmp9700Component', () => {
  it('should add', () => {
    expect(new Cmp9700Component().add9700(1)).toBe(9701);
  });
});