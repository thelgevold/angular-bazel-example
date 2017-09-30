
import { Cmp3281Component } from './cmp';
describe('Cmp3281Component', () => {
  it('should add', () => {
    expect(new Cmp3281Component().add3281(1)).toBe(3282);
  });
});