
import { Cmp3601Component } from './cmp';
describe('Cmp3601Component', () => {
  it('should add', () => {
    expect(new Cmp3601Component().add3601(1)).toBe(3602);
  });
});