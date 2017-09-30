
import { Cmp8611Component } from './cmp';
describe('Cmp8611Component', () => {
  it('should add', () => {
    expect(new Cmp8611Component().add8611(1)).toBe(8612);
  });
});