
import { Cmp3012Component } from './cmp';
describe('Cmp3012Component', () => {
  it('should add', () => {
    expect(new Cmp3012Component().add3012(1)).toBe(3013);
  });
});