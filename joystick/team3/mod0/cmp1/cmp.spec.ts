
import { Cmp9301Component } from './cmp';
describe('Cmp9301Component', () => {
  it('should add', () => {
    expect(new Cmp9301Component().add9301(1)).toBe(9302);
  });
});