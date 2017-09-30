
import { Cmp8794Component } from './cmp';
describe('Cmp8794Component', () => {
  it('should add', () => {
    expect(new Cmp8794Component().add8794(1)).toBe(8795);
  });
});