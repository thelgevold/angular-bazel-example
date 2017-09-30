
import { Cmp6653Component } from './cmp';
describe('Cmp6653Component', () => {
  it('should add', () => {
    expect(new Cmp6653Component().add6653(1)).toBe(6654);
  });
});