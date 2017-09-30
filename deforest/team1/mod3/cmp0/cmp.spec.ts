
import { Cmp3130Component } from './cmp';
describe('Cmp3130Component', () => {
  it('should add', () => {
    expect(new Cmp3130Component().add3130(1)).toBe(3131);
  });
});