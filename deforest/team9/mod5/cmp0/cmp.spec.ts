
import { Cmp3950Component } from './cmp';
describe('Cmp3950Component', () => {
  it('should add', () => {
    expect(new Cmp3950Component().add3950(1)).toBe(3951);
  });
});