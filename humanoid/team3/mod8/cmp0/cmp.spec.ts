
import { Cmp7380Component } from './cmp';
describe('Cmp7380Component', () => {
  it('should add', () => {
    expect(new Cmp7380Component().add7380(1)).toBe(7381);
  });
});