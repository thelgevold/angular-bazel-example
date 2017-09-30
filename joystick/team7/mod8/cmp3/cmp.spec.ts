
import { Cmp9783Component } from './cmp';
describe('Cmp9783Component', () => {
  it('should add', () => {
    expect(new Cmp9783Component().add9783(1)).toBe(9784);
  });
});