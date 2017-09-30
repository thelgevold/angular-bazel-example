
import { Cmp9278Component } from './cmp';
describe('Cmp9278Component', () => {
  it('should add', () => {
    expect(new Cmp9278Component().add9278(1)).toBe(9279);
  });
});