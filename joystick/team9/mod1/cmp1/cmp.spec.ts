
import { Cmp9911Component } from './cmp';
describe('Cmp9911Component', () => {
  it('should add', () => {
    expect(new Cmp9911Component().add9911(1)).toBe(9912);
  });
});