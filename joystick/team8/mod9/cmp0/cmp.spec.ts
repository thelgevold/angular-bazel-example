
import { Cmp9890Component } from './cmp';
describe('Cmp9890Component', () => {
  it('should add', () => {
    expect(new Cmp9890Component().add9890(1)).toBe(9891);
  });
});