
import { Cmp5408Component } from './cmp';
describe('Cmp5408Component', () => {
  it('should add', () => {
    expect(new Cmp5408Component().add5408(1)).toBe(5409);
  });
});