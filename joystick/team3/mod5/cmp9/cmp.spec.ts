
import { Cmp9359Component } from './cmp';
describe('Cmp9359Component', () => {
  it('should add', () => {
    expect(new Cmp9359Component().add9359(1)).toBe(9360);
  });
});