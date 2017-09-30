
import { Cmp9284Component } from './cmp';
describe('Cmp9284Component', () => {
  it('should add', () => {
    expect(new Cmp9284Component().add9284(1)).toBe(9285);
  });
});