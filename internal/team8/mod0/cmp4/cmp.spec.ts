
import { Cmp8804Component } from './cmp';
describe('Cmp8804Component', () => {
  it('should add', () => {
    expect(new Cmp8804Component().add8804(1)).toBe(8805);
  });
});