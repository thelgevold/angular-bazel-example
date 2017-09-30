
import { Cmp9866Component } from './cmp';
describe('Cmp9866Component', () => {
  it('should add', () => {
    expect(new Cmp9866Component().add9866(1)).toBe(9867);
  });
});