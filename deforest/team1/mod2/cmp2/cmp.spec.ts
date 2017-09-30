
import { Cmp3122Component } from './cmp';
describe('Cmp3122Component', () => {
  it('should add', () => {
    expect(new Cmp3122Component().add3122(1)).toBe(3123);
  });
});