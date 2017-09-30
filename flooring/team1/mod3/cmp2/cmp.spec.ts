
import { Cmp5132Component } from './cmp';
describe('Cmp5132Component', () => {
  it('should add', () => {
    expect(new Cmp5132Component().add5132(1)).toBe(5133);
  });
});