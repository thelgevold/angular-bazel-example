
import { Cmp5370Component } from './cmp';
describe('Cmp5370Component', () => {
  it('should add', () => {
    expect(new Cmp5370Component().add5370(1)).toBe(5371);
  });
});