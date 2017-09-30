
import { Cmp3804Component } from './cmp';
describe('Cmp3804Component', () => {
  it('should add', () => {
    expect(new Cmp3804Component().add3804(1)).toBe(3805);
  });
});