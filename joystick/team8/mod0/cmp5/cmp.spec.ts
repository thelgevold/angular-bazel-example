
import { Cmp9805Component } from './cmp';
describe('Cmp9805Component', () => {
  it('should add', () => {
    expect(new Cmp9805Component().add9805(1)).toBe(9806);
  });
});