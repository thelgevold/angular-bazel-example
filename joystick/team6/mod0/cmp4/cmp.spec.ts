
import { Cmp9604Component } from './cmp';
describe('Cmp9604Component', () => {
  it('should add', () => {
    expect(new Cmp9604Component().add9604(1)).toBe(9605);
  });
});