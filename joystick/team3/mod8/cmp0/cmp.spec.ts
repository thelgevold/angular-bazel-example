
import { Cmp9380Component } from './cmp';
describe('Cmp9380Component', () => {
  it('should add', () => {
    expect(new Cmp9380Component().add9380(1)).toBe(9381);
  });
});