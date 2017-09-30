
import { Cmp5804Component } from './cmp';
describe('Cmp5804Component', () => {
  it('should add', () => {
    expect(new Cmp5804Component().add5804(1)).toBe(5805);
  });
});