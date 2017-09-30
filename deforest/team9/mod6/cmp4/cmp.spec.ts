
import { Cmp3964Component } from './cmp';
describe('Cmp3964Component', () => {
  it('should add', () => {
    expect(new Cmp3964Component().add3964(1)).toBe(3965);
  });
});