
import { Cmp3028Component } from './cmp';
describe('Cmp3028Component', () => {
  it('should add', () => {
    expect(new Cmp3028Component().add3028(1)).toBe(3029);
  });
});