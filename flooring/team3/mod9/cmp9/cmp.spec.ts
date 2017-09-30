
import { Cmp5399Component } from './cmp';
describe('Cmp5399Component', () => {
  it('should add', () => {
    expect(new Cmp5399Component().add5399(1)).toBe(5400);
  });
});