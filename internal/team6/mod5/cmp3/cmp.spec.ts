
import { Cmp8653Component } from './cmp';
describe('Cmp8653Component', () => {
  it('should add', () => {
    expect(new Cmp8653Component().add8653(1)).toBe(8654);
  });
});