
import { Cmp8345Component } from './cmp';
describe('Cmp8345Component', () => {
  it('should add', () => {
    expect(new Cmp8345Component().add8345(1)).toBe(8346);
  });
});