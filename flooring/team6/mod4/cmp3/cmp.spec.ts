
import { Cmp5643Component } from './cmp';
describe('Cmp5643Component', () => {
  it('should add', () => {
    expect(new Cmp5643Component().add5643(1)).toBe(5644);
  });
});