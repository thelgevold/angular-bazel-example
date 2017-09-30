
import { Cmp5812Component } from './cmp';
describe('Cmp5812Component', () => {
  it('should add', () => {
    expect(new Cmp5812Component().add5812(1)).toBe(5813);
  });
});