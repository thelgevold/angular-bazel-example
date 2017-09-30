
import { Cmp6399Component } from './cmp';
describe('Cmp6399Component', () => {
  it('should add', () => {
    expect(new Cmp6399Component().add6399(1)).toBe(6400);
  });
});