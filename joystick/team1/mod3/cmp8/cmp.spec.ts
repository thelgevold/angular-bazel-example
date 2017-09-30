
import { Cmp9138Component } from './cmp';
describe('Cmp9138Component', () => {
  it('should add', () => {
    expect(new Cmp9138Component().add9138(1)).toBe(9139);
  });
});