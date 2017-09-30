
import { Cmp8867Component } from './cmp';
describe('Cmp8867Component', () => {
  it('should add', () => {
    expect(new Cmp8867Component().add8867(1)).toBe(8868);
  });
});