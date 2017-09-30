
import { Cmp3576Component } from './cmp';
describe('Cmp3576Component', () => {
  it('should add', () => {
    expect(new Cmp3576Component().add3576(1)).toBe(3577);
  });
});