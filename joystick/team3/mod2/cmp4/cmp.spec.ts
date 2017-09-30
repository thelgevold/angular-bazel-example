
import { Cmp9324Component } from './cmp';
describe('Cmp9324Component', () => {
  it('should add', () => {
    expect(new Cmp9324Component().add9324(1)).toBe(9325);
  });
});