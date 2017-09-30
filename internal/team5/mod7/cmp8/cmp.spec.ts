
import { Cmp8578Component } from './cmp';
describe('Cmp8578Component', () => {
  it('should add', () => {
    expect(new Cmp8578Component().add8578(1)).toBe(8579);
  });
});