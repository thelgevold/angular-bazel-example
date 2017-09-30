
import { Cmp3618Component } from './cmp';
describe('Cmp3618Component', () => {
  it('should add', () => {
    expect(new Cmp3618Component().add3618(1)).toBe(3619);
  });
});