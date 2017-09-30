
import { Cmp7783Component } from './cmp';
describe('Cmp7783Component', () => {
  it('should add', () => {
    expect(new Cmp7783Component().add7783(1)).toBe(7784);
  });
});