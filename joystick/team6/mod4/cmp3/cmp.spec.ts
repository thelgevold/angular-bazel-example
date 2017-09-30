
import { Cmp9643Component } from './cmp';
describe('Cmp9643Component', () => {
  it('should add', () => {
    expect(new Cmp9643Component().add9643(1)).toBe(9644);
  });
});