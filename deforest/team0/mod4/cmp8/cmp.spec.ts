
import { Cmp3048Component } from './cmp';
describe('Cmp3048Component', () => {
  it('should add', () => {
    expect(new Cmp3048Component().add3048(1)).toBe(3049);
  });
});