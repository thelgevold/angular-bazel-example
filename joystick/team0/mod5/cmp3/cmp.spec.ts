
import { Cmp9053Component } from './cmp';
describe('Cmp9053Component', () => {
  it('should add', () => {
    expect(new Cmp9053Component().add9053(1)).toBe(9054);
  });
});