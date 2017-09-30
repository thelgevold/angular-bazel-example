
import { Cmp8364Component } from './cmp';
describe('Cmp8364Component', () => {
  it('should add', () => {
    expect(new Cmp8364Component().add8364(1)).toBe(8365);
  });
});