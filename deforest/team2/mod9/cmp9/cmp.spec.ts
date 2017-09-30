
import { Cmp3299Component } from './cmp';
describe('Cmp3299Component', () => {
  it('should add', () => {
    expect(new Cmp3299Component().add3299(1)).toBe(3300);
  });
});