
import { Cmp3099Component } from './cmp';
describe('Cmp3099Component', () => {
  it('should add', () => {
    expect(new Cmp3099Component().add3099(1)).toBe(3100);
  });
});