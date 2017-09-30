
import { Cmp3253Component } from './cmp';
describe('Cmp3253Component', () => {
  it('should add', () => {
    expect(new Cmp3253Component().add3253(1)).toBe(3254);
  });
});