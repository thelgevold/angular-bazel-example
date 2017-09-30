
import { Cmp3254Component } from './cmp';
describe('Cmp3254Component', () => {
  it('should add', () => {
    expect(new Cmp3254Component().add3254(1)).toBe(3255);
  });
});