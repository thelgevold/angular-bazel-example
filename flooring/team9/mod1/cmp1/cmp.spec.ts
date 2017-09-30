
import { Cmp5911Component } from './cmp';
describe('Cmp5911Component', () => {
  it('should add', () => {
    expect(new Cmp5911Component().add5911(1)).toBe(5912);
  });
});