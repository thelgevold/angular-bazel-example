
import { Cmp3527Component } from './cmp';
describe('Cmp3527Component', () => {
  it('should add', () => {
    expect(new Cmp3527Component().add3527(1)).toBe(3528);
  });
});