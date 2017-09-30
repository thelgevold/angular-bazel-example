
import { Cmp3583Component } from './cmp';
describe('Cmp3583Component', () => {
  it('should add', () => {
    expect(new Cmp3583Component().add3583(1)).toBe(3584);
  });
});