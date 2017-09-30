
import { Cmp3366Component } from './cmp';
describe('Cmp3366Component', () => {
  it('should add', () => {
    expect(new Cmp3366Component().add3366(1)).toBe(3367);
  });
});