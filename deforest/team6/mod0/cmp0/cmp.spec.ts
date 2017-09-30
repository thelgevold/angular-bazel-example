
import { Cmp3600Component } from './cmp';
describe('Cmp3600Component', () => {
  it('should add', () => {
    expect(new Cmp3600Component().add3600(1)).toBe(3601);
  });
});