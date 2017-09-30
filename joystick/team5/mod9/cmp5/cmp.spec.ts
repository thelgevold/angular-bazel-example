
import { Cmp9595Component } from './cmp';
describe('Cmp9595Component', () => {
  it('should add', () => {
    expect(new Cmp9595Component().add9595(1)).toBe(9596);
  });
});