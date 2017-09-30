
import { Cmp5683Component } from './cmp';
describe('Cmp5683Component', () => {
  it('should add', () => {
    expect(new Cmp5683Component().add5683(1)).toBe(5684);
  });
});