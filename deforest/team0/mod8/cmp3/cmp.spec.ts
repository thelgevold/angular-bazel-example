
import { Cmp3083Component } from './cmp';
describe('Cmp3083Component', () => {
  it('should add', () => {
    expect(new Cmp3083Component().add3083(1)).toBe(3084);
  });
});