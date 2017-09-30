
import { Cmp5958Component } from './cmp';
describe('Cmp5958Component', () => {
  it('should add', () => {
    expect(new Cmp5958Component().add5958(1)).toBe(5959);
  });
});