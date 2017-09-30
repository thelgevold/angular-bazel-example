
import { Cmp3962Component } from './cmp';
describe('Cmp3962Component', () => {
  it('should add', () => {
    expect(new Cmp3962Component().add3962(1)).toBe(3963);
  });
});