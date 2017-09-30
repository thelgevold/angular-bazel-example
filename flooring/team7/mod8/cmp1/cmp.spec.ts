
import { Cmp5781Component } from './cmp';
describe('Cmp5781Component', () => {
  it('should add', () => {
    expect(new Cmp5781Component().add5781(1)).toBe(5782);
  });
});