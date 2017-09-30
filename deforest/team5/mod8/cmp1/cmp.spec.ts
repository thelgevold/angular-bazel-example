
import { Cmp3581Component } from './cmp';
describe('Cmp3581Component', () => {
  it('should add', () => {
    expect(new Cmp3581Component().add3581(1)).toBe(3582);
  });
});