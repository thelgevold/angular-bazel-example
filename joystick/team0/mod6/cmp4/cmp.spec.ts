
import { Cmp9064Component } from './cmp';
describe('Cmp9064Component', () => {
  it('should add', () => {
    expect(new Cmp9064Component().add9064(1)).toBe(9065);
  });
});