
import { Cmp9704Component } from './cmp';
describe('Cmp9704Component', () => {
  it('should add', () => {
    expect(new Cmp9704Component().add9704(1)).toBe(9705);
  });
});