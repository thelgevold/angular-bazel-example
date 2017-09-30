
import { Cmp9255Component } from './cmp';
describe('Cmp9255Component', () => {
  it('should add', () => {
    expect(new Cmp9255Component().add9255(1)).toBe(9256);
  });
});