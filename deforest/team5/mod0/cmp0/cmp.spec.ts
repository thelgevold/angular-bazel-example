
import { Cmp3500Component } from './cmp';
describe('Cmp3500Component', () => {
  it('should add', () => {
    expect(new Cmp3500Component().add3500(1)).toBe(3501);
  });
});