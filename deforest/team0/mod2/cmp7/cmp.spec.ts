
import { Cmp3027Component } from './cmp';
describe('Cmp3027Component', () => {
  it('should add', () => {
    expect(new Cmp3027Component().add3027(1)).toBe(3028);
  });
});