
import { Cmp3720Component } from './cmp';
describe('Cmp3720Component', () => {
  it('should add', () => {
    expect(new Cmp3720Component().add3720(1)).toBe(3721);
  });
});