
import { Cmp3558Component } from './cmp';
describe('Cmp3558Component', () => {
  it('should add', () => {
    expect(new Cmp3558Component().add3558(1)).toBe(3559);
  });
});