
import { Cmp8715Component } from './cmp';
describe('Cmp8715Component', () => {
  it('should add', () => {
    expect(new Cmp8715Component().add8715(1)).toBe(8716);
  });
});