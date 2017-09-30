
import { Cmp8211Component } from './cmp';
describe('Cmp8211Component', () => {
  it('should add', () => {
    expect(new Cmp8211Component().add8211(1)).toBe(8212);
  });
});