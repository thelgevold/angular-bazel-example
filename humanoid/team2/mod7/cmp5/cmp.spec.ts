
import { Cmp7275Component } from './cmp';
describe('Cmp7275Component', () => {
  it('should add', () => {
    expect(new Cmp7275Component().add7275(1)).toBe(7276);
  });
});