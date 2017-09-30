
import { Cmp5640Component } from './cmp';
describe('Cmp5640Component', () => {
  it('should add', () => {
    expect(new Cmp5640Component().add5640(1)).toBe(5641);
  });
});