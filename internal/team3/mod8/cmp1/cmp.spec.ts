
import { Cmp8381Component } from './cmp';
describe('Cmp8381Component', () => {
  it('should add', () => {
    expect(new Cmp8381Component().add8381(1)).toBe(8382);
  });
});