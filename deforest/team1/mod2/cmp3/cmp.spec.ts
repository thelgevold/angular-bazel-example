
import { Cmp3123Component } from './cmp';
describe('Cmp3123Component', () => {
  it('should add', () => {
    expect(new Cmp3123Component().add3123(1)).toBe(3124);
  });
});