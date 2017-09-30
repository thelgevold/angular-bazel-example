
import { Cmp8540Component } from './cmp';
describe('Cmp8540Component', () => {
  it('should add', () => {
    expect(new Cmp8540Component().add8540(1)).toBe(8541);
  });
});