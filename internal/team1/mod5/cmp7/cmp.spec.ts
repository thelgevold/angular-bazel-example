
import { Cmp8157Component } from './cmp';
describe('Cmp8157Component', () => {
  it('should add', () => {
    expect(new Cmp8157Component().add8157(1)).toBe(8158);
  });
});