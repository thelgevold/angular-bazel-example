
import { Cmp3922Component } from './cmp';
describe('Cmp3922Component', () => {
  it('should add', () => {
    expect(new Cmp3922Component().add3922(1)).toBe(3923);
  });
});