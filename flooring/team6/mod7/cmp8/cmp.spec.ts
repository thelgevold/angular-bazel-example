
import { Cmp5678Component } from './cmp';
describe('Cmp5678Component', () => {
  it('should add', () => {
    expect(new Cmp5678Component().add5678(1)).toBe(5679);
  });
});