
import { Cmp3653Component } from './cmp';
describe('Cmp3653Component', () => {
  it('should add', () => {
    expect(new Cmp3653Component().add3653(1)).toBe(3654);
  });
});