
import { Cmp7408Component } from './cmp';
describe('Cmp7408Component', () => {
  it('should add', () => {
    expect(new Cmp7408Component().add7408(1)).toBe(7409);
  });
});