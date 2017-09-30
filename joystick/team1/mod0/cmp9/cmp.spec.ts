
import { Cmp9109Component } from './cmp';
describe('Cmp9109Component', () => {
  it('should add', () => {
    expect(new Cmp9109Component().add9109(1)).toBe(9110);
  });
});