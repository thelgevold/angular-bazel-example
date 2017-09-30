
import { Cmp3351Component } from './cmp';
describe('Cmp3351Component', () => {
  it('should add', () => {
    expect(new Cmp3351Component().add3351(1)).toBe(3352);
  });
});