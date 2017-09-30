
import { Cmp3613Component } from './cmp';
describe('Cmp3613Component', () => {
  it('should add', () => {
    expect(new Cmp3613Component().add3613(1)).toBe(3614);
  });
});