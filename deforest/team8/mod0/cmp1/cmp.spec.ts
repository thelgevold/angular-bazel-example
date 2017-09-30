
import { Cmp3801Component } from './cmp';
describe('Cmp3801Component', () => {
  it('should add', () => {
    expect(new Cmp3801Component().add3801(1)).toBe(3802);
  });
});