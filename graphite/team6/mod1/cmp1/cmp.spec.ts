
import { Cmp6611Component } from './cmp';
describe('Cmp6611Component', () => {
  it('should add', () => {
    expect(new Cmp6611Component().add6611(1)).toBe(6612);
  });
});