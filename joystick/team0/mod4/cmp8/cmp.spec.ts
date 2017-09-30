
import { Cmp9048Component } from './cmp';
describe('Cmp9048Component', () => {
  it('should add', () => {
    expect(new Cmp9048Component().add9048(1)).toBe(9049);
  });
});