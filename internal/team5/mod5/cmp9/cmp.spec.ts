
import { Cmp8559Component } from './cmp';
describe('Cmp8559Component', () => {
  it('should add', () => {
    expect(new Cmp8559Component().add8559(1)).toBe(8560);
  });
});