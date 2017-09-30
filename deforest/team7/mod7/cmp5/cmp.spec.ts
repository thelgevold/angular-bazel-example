
import { Cmp3775Component } from './cmp';
describe('Cmp3775Component', () => {
  it('should add', () => {
    expect(new Cmp3775Component().add3775(1)).toBe(3776);
  });
});