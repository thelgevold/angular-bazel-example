
import { Cmp8695Component } from './cmp';
describe('Cmp8695Component', () => {
  it('should add', () => {
    expect(new Cmp8695Component().add8695(1)).toBe(8696);
  });
});