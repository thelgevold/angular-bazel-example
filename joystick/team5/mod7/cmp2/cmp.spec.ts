
import { Cmp9572Component } from './cmp';
describe('Cmp9572Component', () => {
  it('should add', () => {
    expect(new Cmp9572Component().add9572(1)).toBe(9573);
  });
});