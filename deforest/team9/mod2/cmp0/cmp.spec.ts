
import { Cmp3920Component } from './cmp';
describe('Cmp3920Component', () => {
  it('should add', () => {
    expect(new Cmp3920Component().add3920(1)).toBe(3921);
  });
});