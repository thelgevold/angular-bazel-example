
import { Cmp3280Component } from './cmp';
describe('Cmp3280Component', () => {
  it('should add', () => {
    expect(new Cmp3280Component().add3280(1)).toBe(3281);
  });
});