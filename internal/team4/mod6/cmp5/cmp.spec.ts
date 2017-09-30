
import { Cmp8465Component } from './cmp';
describe('Cmp8465Component', () => {
  it('should add', () => {
    expect(new Cmp8465Component().add8465(1)).toBe(8466);
  });
});