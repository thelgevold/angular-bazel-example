
import { Cmp5588Component } from './cmp';
describe('Cmp5588Component', () => {
  it('should add', () => {
    expect(new Cmp5588Component().add5588(1)).toBe(5589);
  });
});