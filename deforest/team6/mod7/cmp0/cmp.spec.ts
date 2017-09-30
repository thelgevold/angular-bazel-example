
import { Cmp3670Component } from './cmp';
describe('Cmp3670Component', () => {
  it('should add', () => {
    expect(new Cmp3670Component().add3670(1)).toBe(3671);
  });
});