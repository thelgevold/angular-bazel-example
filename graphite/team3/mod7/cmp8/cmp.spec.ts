
import { Cmp6378Component } from './cmp';
describe('Cmp6378Component', () => {
  it('should add', () => {
    expect(new Cmp6378Component().add6378(1)).toBe(6379);
  });
});