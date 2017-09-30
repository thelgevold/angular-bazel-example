
import { Cmp3032Component } from './cmp';
describe('Cmp3032Component', () => {
  it('should add', () => {
    expect(new Cmp3032Component().add3032(1)).toBe(3033);
  });
});