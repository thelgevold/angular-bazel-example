
import { Cmp9254Component } from './cmp';
describe('Cmp9254Component', () => {
  it('should add', () => {
    expect(new Cmp9254Component().add9254(1)).toBe(9255);
  });
});