
import { Cmp5279Component } from './cmp';
describe('Cmp5279Component', () => {
  it('should add', () => {
    expect(new Cmp5279Component().add5279(1)).toBe(5280);
  });
});