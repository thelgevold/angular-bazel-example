
import { Cmp5629Component } from './cmp';
describe('Cmp5629Component', () => {
  it('should add', () => {
    expect(new Cmp5629Component().add5629(1)).toBe(5630);
  });
});