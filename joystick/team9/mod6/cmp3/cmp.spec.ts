
import { Cmp9963Component } from './cmp';
describe('Cmp9963Component', () => {
  it('should add', () => {
    expect(new Cmp9963Component().add9963(1)).toBe(9964);
  });
});