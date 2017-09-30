
import { Cmp8991Component } from './cmp';
describe('Cmp8991Component', () => {
  it('should add', () => {
    expect(new Cmp8991Component().add8991(1)).toBe(8992);
  });
});