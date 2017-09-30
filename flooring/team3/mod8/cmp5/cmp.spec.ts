
import { Cmp5385Component } from './cmp';
describe('Cmp5385Component', () => {
  it('should add', () => {
    expect(new Cmp5385Component().add5385(1)).toBe(5386);
  });
});