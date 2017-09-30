
import { Cmp5365Component } from './cmp';
describe('Cmp5365Component', () => {
  it('should add', () => {
    expect(new Cmp5365Component().add5365(1)).toBe(5366);
  });
});