
import { Cmp8842Component } from './cmp';
describe('Cmp8842Component', () => {
  it('should add', () => {
    expect(new Cmp8842Component().add8842(1)).toBe(8843);
  });
});