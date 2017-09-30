
import { Cmp3113Component } from './cmp';
describe('Cmp3113Component', () => {
  it('should add', () => {
    expect(new Cmp3113Component().add3113(1)).toBe(3114);
  });
});