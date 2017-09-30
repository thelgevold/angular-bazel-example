
import { Cmp5775Component } from './cmp';
describe('Cmp5775Component', () => {
  it('should add', () => {
    expect(new Cmp5775Component().add5775(1)).toBe(5776);
  });
});