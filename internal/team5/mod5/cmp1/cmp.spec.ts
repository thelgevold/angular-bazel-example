
import { Cmp8551Component } from './cmp';
describe('Cmp8551Component', () => {
  it('should add', () => {
    expect(new Cmp8551Component().add8551(1)).toBe(8552);
  });
});