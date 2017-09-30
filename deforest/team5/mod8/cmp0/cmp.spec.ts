
import { Cmp3580Component } from './cmp';
describe('Cmp3580Component', () => {
  it('should add', () => {
    expect(new Cmp3580Component().add3580(1)).toBe(3581);
  });
});