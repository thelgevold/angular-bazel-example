
import { Cmp5970Component } from './cmp';
describe('Cmp5970Component', () => {
  it('should add', () => {
    expect(new Cmp5970Component().add5970(1)).toBe(5971);
  });
});