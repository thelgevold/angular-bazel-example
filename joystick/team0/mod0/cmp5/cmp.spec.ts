
import { Cmp9005Component } from './cmp';
describe('Cmp9005Component', () => {
  it('should add', () => {
    expect(new Cmp9005Component().add9005(1)).toBe(9006);
  });
});