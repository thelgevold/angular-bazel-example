
import { Cmp9804Component } from './cmp';
describe('Cmp9804Component', () => {
  it('should add', () => {
    expect(new Cmp9804Component().add9804(1)).toBe(9805);
  });
});