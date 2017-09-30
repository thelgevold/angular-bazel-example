
import { Cmp5016Component } from './cmp';
describe('Cmp5016Component', () => {
  it('should add', () => {
    expect(new Cmp5016Component().add5016(1)).toBe(5017);
  });
});