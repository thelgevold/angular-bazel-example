
import { Cmp3628Component } from './cmp';
describe('Cmp3628Component', () => {
  it('should add', () => {
    expect(new Cmp3628Component().add3628(1)).toBe(3629);
  });
});