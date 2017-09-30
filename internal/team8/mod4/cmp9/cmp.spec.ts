
import { Cmp8849Component } from './cmp';
describe('Cmp8849Component', () => {
  it('should add', () => {
    expect(new Cmp8849Component().add8849(1)).toBe(8850);
  });
});