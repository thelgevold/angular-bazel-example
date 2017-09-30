
import { Cmp8890Component } from './cmp';
describe('Cmp8890Component', () => {
  it('should add', () => {
    expect(new Cmp8890Component().add8890(1)).toBe(8891);
  });
});