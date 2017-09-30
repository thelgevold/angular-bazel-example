
import { Cmp8655Component } from './cmp';
describe('Cmp8655Component', () => {
  it('should add', () => {
    expect(new Cmp8655Component().add8655(1)).toBe(8656);
  });
});