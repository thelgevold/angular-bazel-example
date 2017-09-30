
import { Cmp3220Component } from './cmp';
describe('Cmp3220Component', () => {
  it('should add', () => {
    expect(new Cmp3220Component().add3220(1)).toBe(3221);
  });
});