
import { Cmp9580Component } from './cmp';
describe('Cmp9580Component', () => {
  it('should add', () => {
    expect(new Cmp9580Component().add9580(1)).toBe(9581);
  });
});